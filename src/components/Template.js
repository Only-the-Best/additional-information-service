import React from 'react';

function Template(Component, name) {
  return class extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      const lowercase = name.toLowerCase();
      const title = name === 'Home' ? 'Home Value' : name;
      return (
        <div className="main-expand-container">
          <div>
            <section>
              <h2
                id={`${lowercase}-header`}
                className={
                  this.props.status ? 'header-toggle expanded' : 'header-toggle'
                }
                onClick={() => this.props.expand(lowercase)}
              >
                <span className="header-span">{title}</span>
                {this.props.status ? (
                  <img className="chev" src="https://s3-us-west-1.amazonaws.com/housing-hr/down.png" />
                ) : (
                  <img className="chev" src="https://s3-us-west-1.amazonaws.com/housing-hr/up.png" />
                )}
              </h2>
              {this.props.status && (
                <div className="sub-container" id={`${lowercase}-active`}>
                  <Component {...this.props} />
                </div>
              )}
            </section>
          </div>
        </div>
      );
    }
  };
}

export default Template;
