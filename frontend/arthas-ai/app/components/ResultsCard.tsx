import React from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';

interface ResultsCardProps {
  title: string;
  abstract: string;
}


const ResultsCard: React.FC<ResultsCardProps> = ({ title, abstract }) => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (data: { title: string; abstract: string; }) => {
      const response = await fetch(`/dashboard/api/test/edit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    },
  });

  // Event handler that calls the mutation and then redirects
  const handleEditClick = () => {
    //Pass the document data to the mutate function
    mutation.mutate({ title, abstract }, {
      onSuccess: () => {
        router.push(`/document/4df63cc6-1918-45d0-a7df-aac5a62a54bc`); // redirects user to document page
      },
      onError: (error) => {
        console.error('Mutation error:', error);
      },
        
    });


    // for now its just going to redirect to document page until i can fix error 
    //router.push(`/document/4df63cc6-1918-45d0-a7df-aac5a62a54bc`);
  };

  return (
    <div className="pt-2 pb-2 pl-4">
      <h3 className="text-xl font-medium text-foreground">{title}</h3>
      <p className="text-foreground mt-1">{abstract}</p>
      <div className="flex mt-3">
        <button
          type="button"
          onClick={handleEditClick}
          className="px-8 py-0 mr-8 text-foreground bg-card rounded-lg">
          Edit
        </button>
      </div>
    </div>
  );
};

export default ResultsCard;

