import React, { PureComponent } from 'react';
import { Icon } from '../index';
import './index.scss';

interface OwnProps {
  value?: string;
  href?: string;
}

type Props = OwnProps;

export class IconTag extends PureComponent<Props> {
  render() {
    const { value, href } = this.props;
    return (
      <div className="tag">
        <a href={href}>
          <Icon className="tag_icon" type="icon-tag" />
          {value}
        </a>
      </div>
    );
  }
}
