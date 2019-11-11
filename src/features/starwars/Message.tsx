import * as React from 'react';

interface OwnProps {
  message: string;
  className?: string;
}

export const NoResult = (props: OwnProps) => (
  <div className="is-full-width">
    <div className="box">
      <p className={props.className}>
        {props.message}
      </p>
    </div>
    <br />
  </div>
);

export default NoResult;