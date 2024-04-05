### Provided proper attribution is provided, Google hereby grants permission to

### reproduce the tables and figures in this paper solely for use in journalistic or

### scholarly works.

## Attention Is All You Need

```
Ashish Vaswani∗
Google Brain
avaswani@google.com
```
```
Noam Shazeer∗
Google Brain
noam@google.com
```
```
Niki Parmar∗
Google Research
nikip@google.com
```
```
Jakob Uszkoreit∗
Google Research
usz@google.com
```
```
Llion Jones∗
Google Research
llion@google.com
```
```
Aidan N. Gomez∗ †
University of Toronto
aidan@cs.toronto.edu
```
```
Łukasz Kaiser∗
Google Brain
lukaszkaiser@google.com
```
```
Illia Polosukhin∗ ‡
illia.polosukhin@gmail.com
```
### Abstract

```
The dominant sequence transduction models are based on complex recurrent or
convolutional neural networks that include an encoder and a decoder. The best
performing models also connect the encoder and decoder through an attention
mechanism. We propose a new simple network architecture, the Transformer,
based solely on attention mechanisms, dispensing with recurrence and convolutions
entirely. Experiments on two machine translation tasks show these models to
be superior in quality while being more parallelizable and requiring significantly
less time to train. Our model achieves 28.4 BLEU on the WMT 2014 English-
to-German translation task, improving over the existing best results, including
ensembles, by over 2 BLEU. On the WMT 2014 English-to-French translation task,
our model establishes a new single-model state-of-the-art BLEU score of 41.8 after
training for 3.5 days on eight GPUs, a small fraction of the training costs of the
best models from the literature. We show that the Transformer generalizes well to
other tasks by applying it successfully to English constituency parsing both with
large and limited training data.
```
```
∗Equal contribution. Listing order is random. Jakob proposed replacing RNNs with self-attention and started
the effort to evaluate this idea. Ashish, with Illia, designed and implemented the first Transformer models and
has been crucially involved in every aspect of this work. Noam proposed scaled dot-product attention, multi-head
attention and the parameter-free position representation and became the other person involved in nearly every
detail. Niki designed, implemented, tuned and evaluated countless model variants in our original codebase and
tensor2tensor. Llion also experimented with novel model variants, was responsible for our initial codebase, and
efficient inference and visualizations. Lukasz and Aidan spent countless long days designing various parts of and
implementing tensor2tensor, replacing our earlier codebase, greatly improving results and massively accelerating
our research.
†Work performed while at Google Brain.
‡Work performed while at Google Research.
```
```
31st Conference on Neural Information Processing Systems (NIPS 2017), Long Beach, CA, USA.
```
# arXiv:1706.03762v7 [cs.CL] 2 Aug 2023


### 1 Introduction

Recurrent neural networks, long short-term memory [ 13 ] and gated recurrent [ 7 ] neural networks
in particular, have been firmly established as state of the art approaches in sequence modeling and
transduction problems such as language modeling and machine translation [ 35 , 2 , 5 ]. Numerous
efforts have since continued to push the boundaries of recurrent language models and encoder-decoder
architectures [38, 24, 15].

Recurrent models typically factor computation along the symbol positions of the input and output
sequences. Aligning the positions to steps in computation time, they generate a sequence of hidden
statesht, as a function of the previous hidden stateht− 1 and the input for positiont. This inherently
sequential nature precludes parallelization within training examples, which becomes critical at longer
sequence lengths, as memory constraints limit batching across examples. Recent work has achieved
significant improvements in computational efficiency through factorization tricks [ 21 ] and conditional
computation [ 32 ], while also improving model performance in case of the latter. The fundamental
constraint of sequential computation, however, remains.

Attention mechanisms have become an integral part of compelling sequence modeling and transduc-
tion models in various tasks, allowing modeling of dependencies without regard to their distance in
the input or output sequences [ 2 , 19 ]. In all but a few cases [ 27 ], however, such attention mechanisms
are used in conjunction with a recurrent network.

In this work we propose the Transformer, a model architecture eschewing recurrence and instead
relying entirely on an attention mechanism to draw global dependencies between input and output.
The Transformer allows for significantly more parallelization and can reach a new state of the art in
translation quality after being trained for as little as twelve hours on eight P100 GPUs.

### 2 Background

The goal of reducing sequential computation also forms the foundation of the Extended Neural GPU
[ 16 ], ByteNet [ 18 ] and ConvS2S [ 9 ], all of which use convolutional neural networks as basic building
block, computing hidden representations in parallel for all input and output positions. In these models,
the number of operations required to relate signals from two arbitrary input or output positions grows
in the distance between positions, linearly for ConvS2S and logarithmically for ByteNet. This makes
it more difficult to learn dependencies between distant positions [ 12 ]. In the Transformer this is
reduced to a constant number of operations, albeit at the cost of reduced effective resolution due
to averaging attention-weighted positions, an effect we counteract with Multi-Head Attention as
described in section 3.2.

Self-attention, sometimes called intra-attention is an attention mechanism relating different positions
of a single sequence in order to compute a representation of the sequence. Self-attention has been
used successfully in a variety of tasks including reading comprehension, abstractive summarization,
textual entailment and learning task-independent sentence representations [4, 27, 28, 22].

End-to-end memory networks are based on a recurrent attention mechanism instead of sequence-
aligned recurrence and have been shown to perform well on simple-language question answering and
language modeling tasks [34].

To the best of our knowledge, however, the Transformer is the first transduction model relying
entirely on self-attention to compute representations of its input and output without using sequence-
aligned RNNs or convolution. In the following sections, we will describe the Transformer, motivate
self-attention and discuss its advantages over models such as [17, 18] and [9].

### 3 Model Architecture

Most competitive neural sequence transduction models have an encoder-decoder structure [ 5 , 2 , 35 ].
Here, the encoder maps an input sequence of symbol representations(x 1 ,...,xn)to a sequence
of continuous representationsz= (z 1 ,...,zn). Givenz, the decoder then generates an output
sequence(y 1 ,...,ym)of symbols one element at a time. At each step the model is auto-regressive
[10], consuming the previously generated symbols as additional input when generating the next.


```
Figure 1: The Transformer - model architecture.
```
The Transformer follows this overall architecture using stacked self-attention and point-wise, fully
connected layers for both the encoder and decoder, shown in the left and right halves of Figure 1,
respectively.

3.1 Encoder and Decoder Stacks

Encoder: The encoder is composed of a stack ofN= 6identical layers. Each layer has two
sub-layers. The first is a multi-head self-attention mechanism, and the second is a simple, position-
wise fully connected feed-forward network. We employ a residual connection [ 11 ] around each of
the two sub-layers, followed by layer normalization [ 1 ]. That is, the output of each sub-layer is
LayerNorm(x+ Sublayer(x)), whereSublayer(x)is the function implemented by the sub-layer
itself. To facilitate these residual connections, all sub-layers in the model, as well as the embedding
layers, produce outputs of dimensiondmodel= 512.

Decoder: The decoder is also composed of a stack ofN= 6identical layers. In addition to the two
sub-layers in each encoder layer, the decoder inserts a third sub-layer, which performs multi-head
attention over the output of the encoder stack. Similar to the encoder, we employ residual connections
around each of the sub-layers, followed by layer normalization. We also modify the self-attention
sub-layer in the decoder stack to prevent positions from attending to subsequent positions. This
masking, combined with fact that the output embeddings are offset by one position, ensures that the
predictions for positionican depend only on the known outputs at positions less thani.

3.2 Attention

An attention function can be described as mapping a query and a set of key-value pairs to an output,
where the query, keys, values, and output are all vectors. The output is computed as a weighted sum


```
Scaled Dot-Product Attention Multi-Head Attention
```
Figure 2: (left) Scaled Dot-Product Attention. (right) Multi-Head Attention consists of several
attention layers running in parallel.

of the values, where the weight assigned to each value is computed by a compatibility function of the
query with the corresponding key.

3.2.1 Scaled Dot-Product Attention

We call our particular attention "Scaled Dot-Product Attention" (Figure 2). The input consists of
queries and keys of dimensiondk, and values of dimensiondv. We compute the dot products of the
query with all keys, divide each by
