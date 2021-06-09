import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

const TransitionedPage = (WrappedComponent) => {
    const TransitionedComponent = (props) => (
        <CSSTransitionGroup
                    transitionAppear={true}
                    transitionAppearTimeout={600}
                    transitionEnterTimeout={600}
                    transitionLeaveTimeout={200}
                    transitionName="slide">
                    <WrappedComponent {...props} />
        </CSSTransitionGroup>
    );
    return TransitionedComponent;
};

export default TransitionedPage;