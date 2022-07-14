import { Star } from '../Star/'

export const Stars = (props) => {
  const { count } = props
  return (
    <div>
      <ul className="card-body-stars u-clearfix">
        <li>
          {(count >= 1 && count <= 5) ?
            [...Array(count)].map((id) => <Star key={id} />)
            : null}
        </li>
      </ul>
    </div>
  )
}
