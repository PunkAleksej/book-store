import React, { useEffect, useState } from 'react';
import { RatingStar, RatingStarContainer } from './BookRatingStars.styles';
import { createRating } from '../../../api/catalog';

type BookRatingType = {
  middleRating: number;
  bookId: number;
};

const BookRatingStars:React.FC<BookRatingType> = (props) => {
  const handleClick = async (id: number) => {
    try {
      const ratingResponse = await createRating({
        bookId: props.bookId, bookRating: id,
      });
      console.log('>>', ratingResponse.data.rating.Book.middleRating);
      setMiddleRatingStarColor(Math.round(+ratingResponse.data.rating.Book.middleRating));
    } catch (err) {
      console.log(err);
    }
  };
  const [bookRating, setMiddleRatingStarColor] = useState(props.middleRating);
  useEffect(() => {
    // setMiddleRatingStarColor(Math.round(+targetBook.middleRating));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookRating]);
  const starsArray: number[] = [1, 2, 3, 4, 5];
  return (
  <RatingStarContainer>
    {starsArray &&
      starsArray.map((star) => (
        <RatingStar
          key={star}
          onClick={() => handleClick(star)}
          isActive={bookRating >= star}
        />
      ))
    }
  </RatingStarContainer>
  );
};

export default BookRatingStars;
