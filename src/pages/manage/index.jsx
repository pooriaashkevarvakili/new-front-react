import { PureComponent } from 'react';

export default class Index extends PureComponent {
  render() {
    const { children } = this.props;
    console.log('children ====> ', children);
    return <div>{children}</div>;

  }
}
