import React from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import axios from "axios";
import { useAuth } from '../utils/providers/authProvider';

interface ResultsCardProps {
  title: string;
  abstract: string;
}


const ResultsCard: React.FC<ResultsCardProps> = ({ title, abstract }) => {
  const router = useRouter();
  const auth = useAuth();

  const mutation = useMutation({
    mutationFn: async (data: { title: string; abstract: string; }) => {
     await axios(`/dashboard/api/test/edit`, {
        method: "POST",
        params: { userID : auth.user!.id },
        headers: {},
        data: data,

      }).then(
        (res) => {
          return res.data;
        }
      ).catch(
        (e) =>{
          console.error('Error in mutationFn:', e);
          throw e; 
        }

      );

    },
  });

  // Event handler that calls the mutation and then redirects
  const handleEditClick = () => {
    //Pass the document data to the mutate function
    mutation.mutate({ title, abstract }, {
      onSuccess: () => {
        router.prefetch(`/doc/4df63cc6-1918-45d0-a7df-aac5a62a54bc`) // prefetches the document page so that it loads faster
        router.push(`/doc/4df63cc6-1918-45d0-a7df-aac5a62a54bc`); // redirects user to document page
      },
      onError: (error) => {
        console.error('Mutation error:', error);
      },
        
    });
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

