import { Star } from 'lucide-react'
interface RatingProps {
  rating: number
}
const Rating = ({ rating }: RatingProps) => {
  const fill = rating >= 1 ? 'yellow' : 'none'
  return (
    <div className="flex gap-1">
      <Star size={14} strokeWidth={2} fill={fill} />
      <Star size={14} strokeWidth={2} fill={rating >= 2 ? 'yellow' : 'none'} />
      <Star size={14} strokeWidth={2} fill={rating >= 3 ? 'yellow' : 'none'} />
      <Star size={14} strokeWidth={2} fill={rating >= 4 ? 'yellow' : 'none'} />
      <Star size={14} strokeWidth={2} fill={rating >= 5 ? 'yellow' : 'none'} />
    </div>
  )
}

export default Rating
