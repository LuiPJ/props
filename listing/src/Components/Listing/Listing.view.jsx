import '../../main.css'

export const Listing = (props) => {
  const { items } = props;
  const itemsTitle = items.map((item) => item.title);
  const itemsImg = items.map((item) => item.MainImage);

  return (
    items.map((el, i) =>
      el.state === 'active' ?
        <div className="item" key={el.listing_id}>
          <div className="item-image">
            <a href={el.url}>
              <img src={itemsImg[i]?.url_570xN} alt="logo" />
            </a>
          </div>
          <div className="item-details">
            {itemsTitle[i]?.length >= 50 ?
              <p className="item-title">{itemsTitle[i].substring(0, 50)}...</p>
              : <p className="item-title">{itemsTitle[i]}</p>
            }
            {el.currency_code === 'USD' || el.currency_code === 'EUR' ?
              <p className="item-price">{el.currency_code === 'EUR' ? '€' : '$'}{el.price}</p> :
              <p className="item-price">{el.price} {el.currency_code}</p>
            }
            <p className={el.quantity <= 10 ? 'item-quantity level-low' : el.quantity <= 20 ? 'item-quantity level-medium' : 'item-quantity level-high'}>{el.quantity}</p>
          </div>
        </div>
        :
        null
    )
  )
};
