import { useMutation } from "react-query";

import network from "../../config/network";

interface UseDrawingImageMutationBodyType {
  image: FormData;
}

export function useDrawingImageMutation() {
  const postDrawingImage = async (body: UseDrawingImageMutationBodyType) => {
    return network.post("drawing/image", body, {});
  };

  const mutation = useMutation({
    mutationFn: postDrawingImage,
  });

  return mutation;
}
