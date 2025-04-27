import { Component } from "react";


class ShopItemClass extends Component {
    render () {
        if (this.props.item) {
            let price = this.props.item.price
            if (price % 1 == 0) {
                price = `${price}.00`
            }

            return (
                <div className="main-content">
                    <h2>{this.props.item.brand}</h2>
                    <h1>{this.props.item.title}</h1>
                    <h3>{this.props.item.description}</h3>
                    <div className="description">
                        {this.props.item.descriptionFull}
                    </div>
                    <div className="highlight-window mobile">
                        <div className="highlight-overlay"></div>
                    </div>
                    <div className="divider"></div>
                    <div className="purchase-info">
                        <div className="price">{this.props.item.currency}{price}</div>
                        <button>Добавить в корзину</button>
                    </div>
                </div>
            )
        } else {
            return '<!-- No item info provided -->'
        }
    }
}


export default ShopItemClass