import React from 'react';
import Base from '../components/Base';
import HeadContent from '../components/HeadContent';

export default function ComponentWillUnmount() {
  const lifecycle = "componentWillUnmount";
  const details = "You should not call setState() in componentWillUnmount() because the component will never be re-rendered. Once a component instance is unmounted, it will never be mounted again.";

    return (
      <React.Fragment>
        <HeadContent
          lifecycle={lifecycle}
          themeColor={'#f44336'}
        />
        <Base
          cannotCall
          lifecycle={lifecycle}
          details={details}
        />
      </React.Fragment>
    )
}
