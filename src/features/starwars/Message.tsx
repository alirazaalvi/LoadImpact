import * as React from 'react';

interface OwnProps {
  message: string;
  className?: string;
}

export const NoResult = (props: OwnProps) => (
  <div>
    <div className="box">
      <div className="content">
        <p className={props.className}>
          {props.message}
        </p>
      </div>
    </div>
    <br />
  </div>
);

export default NoResult;