import { Link } from 'react-router-dom'

interface CategoryProps {
  image: string
  categoryName: string
}
const Category = ({ image, categoryName }: CategoryProps) => {
  return (
    <Link to={`/${categoryName.toLocaleLowerCase()}`} className="flex flex-col items-center gap-2 relative rounded-md border border-slate-400">
      <img src={image} alt={categoryName} className="rounded-xl object-cover aspect-square w-full" />
      <p className="absolute left-0 top-0 w-full h-full bg-zinc-900 bg-opacity-75 text-white text-center font-bold rounded-md flex items-center justify-center">
        {categoryName}
      </p>
    </Link>
  )
}

export default Category
