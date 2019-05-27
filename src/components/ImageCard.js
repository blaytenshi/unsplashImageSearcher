import React from "react";

export default class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spans: 0
    };

    // React.createRef() creates a dom reference to this particular component
    // when it's rendered in the dom and assigns it to the variable imageRef
    this.imageRef = React.createRef();
    // after it is created, we can use the variable this.imageRed to get some
    // information where the ref appears.
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans: spans });
  };

  componentDidMount() {
    // console.log("IMAGE REF", this.imageRef);
    // console.log("IMAGE REF CLIENT HEIGHT", this.imageRef.current.clientHeight);
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img alt={description} src={urls.regular} ref={this.imageRef} />
      </div>
    );
  }
}
