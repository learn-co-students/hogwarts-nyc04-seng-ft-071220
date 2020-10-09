import React from 'react'
// import classnames from 'classnames'

// import styles from './styles.module.css'

class Filter extends React.Component {
 
  state = {
  sortOrder: '',
  sortOrders: ['Highest First', 'Lowest First']
  }
 
  render() {

    return (
      <div className="container">
        <form className="form-horizontal" noValidate>
          <p className="mb-1">Refine your results</p>
          <div className="columns text-center">
            <div className="column col-4 col-xs-12">
              <div className="form-group">
                  <label className="form-label" htmlFor="sortorder">
                    Sort Order
                  </label>
                </div>
                <div className="col-9 col-sm-12">
                <select
                    className="form-select"
                    id="sortorder"
                    value={this.state.sortOrder}
                    onChange={event => this.setState({ sortOrder: event.target.value })}
                  >
                    <option value="">Choose...</option>
                    {this.state.sortOrders.map(order => (
                      <option key={order} value={order.replace(' ', '').toLowerCase()}>
                        {order}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Filter