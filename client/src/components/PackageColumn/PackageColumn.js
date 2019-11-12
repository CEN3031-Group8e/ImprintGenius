import React from 'react';
import HomeModal from '../../components/HomeModal/HomeModal.js'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './PackageColumn.css';
import { Switch, Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";

class PackageColumn extends React.Component {

	didTapPackage() {
		this.props.didSelectPackage(this.props.data);
		this.props.history.push('/Customizer', {data: this.props.data});
	}

	render() {
		const { data } = this.props;
		console.log(this.props);
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
						<HomeModal id={data.packID}></HomeModal>
						<Button className='button greenGradient m15Top overflowHalf' onClick={this.didTapPackage.bind(this)}>
							Build Pack
						</Button>
        </div>
    );
	}
}

export default withRouter(PackageColumn);
