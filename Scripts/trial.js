const e = React.createElement;

class LikeButton extends React.Component {
	constructor(props){
		super(props);
		this.state = {liked : false};
	}

	render(){
		if(this.state.liked){
			return 'you likes this'
		}

		return e (
				'button',
				{
					onClick: () => this.setState({liked: true})
				},
				'Like'
			);
	}
}

class Test extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			a: this.props.showText,
		};
	}
	render(){
		// return e(
		// 		'h3',
		// 		{},
		// 		this.state.a
		// 	);
		return e(Child,{showText: this.state.a});
	}
}

class Child extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return e(
				'button',
				{},
				this.props.showText
			)
	}
}

const app = document.querySelector('#app');
ReactDOM.render(e(Test, {showText : 'grandPaText'} ), app);

