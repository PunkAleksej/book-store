import React from 'react';
import { RatingStar, RatingStarContainer } from './BookRatingStars.styles';
import { createRating, getBook } from '../../../api/catalog';
import { booksActions } from '../../../store/book/reduser';
import { useAppDispatch } from '../../../store';

type BookRatingType = {
  middleRating: number;
  targetBookId: string;
};

const BookRatingStars:React.FC<BookRatingType> = (props) => {
  const { targetBookId, middleRating } = props;
  const dispatch = useAppDispatch();
  const handleClick = async (star: number) => {
    try {
      await createRating({
        bookId: targetBookId.toString(), bookRating: star.toString(),
      });
      const getBookResponse = await getBook({ id: targetBookId.toString() });
      dispatch(booksActions.loadBooks([getBookResponse.data]));
    } catch (err) {
      console.log(err);
    }
  };
  const starsArray: number[] = [1, 2, 3, 4, 5];
  return (
  <RatingStarContainer>
    {starsArray &&
      starsArray.map((star) => (
        <RatingStar
          key={star}
          onClick={() => handleClick(star)}
          isActive={middleRating >= star}
        />
      ))
    }
  </RatingStarContainer>
  );
};

export default BookRatingStars;
