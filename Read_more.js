var ReadmoreText = React.createClass({
getInitialState: function () {
    var string =this.props.text;
    var limit = 50;
    var limit_crossed = false;
    if (string.length > limit) {
        limit_crossed = true;
    }
    else {
        limit_crossed = false;
    }
    return ({
        limit_crossed: limit_crossed,
        flip: true,
        display_text: string.substring(0, limit),
        original_text: string,
        text: string.substring(0, limit),
        read_text: "  --Read more"
    });
},
readmore: function () {
    this.setState({flip: !this.state.flip}, function () {
        this.setState({
            display_text: this.state.flip ? this.state.text : this.state.original_text,
            read_text: this.state.flip ? "   ---Read more" : "  ---Read less"
        });
    });
},
render: function () {
    if (this.state.limit_crossed) {
        return (<div>{this.state.display_text}<a onClick={this.readmore}>{this.state.read_text}</a></div>)
    }
    else {
        return (<div>{this.state.text}</div>)
    }
}
Window.ReadmoreText=ReadmoreText
