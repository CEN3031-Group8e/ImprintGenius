import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './PackageColumn.css';

class PackageColumn extends React.Component {

	render() {
		const { data } = this.props;

    return (
        <div className='packageCol m50TopSm'>
            <div className='packageHeader'>
              {data.name}
            </div>
            <div className='packageCost'>
              ${data.cost}
            </div>
            <div className='packageSavings'>
              ${data.savings} Savings
            </div>
						<div className='packageDescription'>
              {data.description}
            </div>
						<div className='lightLine'></div>
						<ul>
							{data.items.map((item) =>
								<li><span className='boldText'>{item.quantity}</span> {item.name}</li>
							)}
						</ul>
						<Button className='button blueGradient m30Top'>See More</Button>
						<Button className='button greenGradient m15Top overflowHalf'>Build Pack</Button>
        </div>
    );
	}
}

export default PackageColumn;
