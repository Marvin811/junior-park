import { useActions } from "@/hooks/useActions";
import { useCart } from "@/hooks/useCart";
import { useProfile } from "@/hooks/useProfile";
import { UserService } from "@/services/user.service";
import { IProduct } from "@/types/product.types";
import { useMutation } from "@tanstack/react-query";
import { FC } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {
  const {profile} = useProfile()

  const {mutate} = useMutation(['toggle favorite'], () => UserService.toggleFavorite(productId))

  const isExists = profile.favorites.some(
    favorite => favorite.id === productId)

  return (
    <div>
      <button
        onClick={() =>
         mutate()
        }
      >
        {currentElement ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>
    </div>
  );
};
