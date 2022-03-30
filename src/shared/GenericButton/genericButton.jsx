import React, { useState } from 'react';
import { Button } from './genericButton.styles';
import PropTypes from 'prop-types';

export default function GenericButton({
    children,
    onClick,
    bkground,
    bgColor,
    labelColor,
    disabled,
    type,
    fontSize,
    fontWeight,
    style,
    buttonWidth,
    ...props
}) {
    const [hover, setHover] = useState(false);
    const toggleHover = () => {
        setHover(!hover);
    };
    const commonStyles = {
        background: bkground,
        backgroundColor: bgColor,
        color: labelColor || 'white'
    };
    const outlineStyles = {
        border: `1px solid ${bgColor}`,
        color: bgColor,
        backgroundColor: 'white'
    };
    const outlineHoverStyle = {
        color: labelColor,
        backgroundColor: bgColor
    };

    const roundedStyle = {
        backgroundColor: bgColor,
        color: labelColor || 'white',
        borderRadius: '0.635rem'
    };
    const disabledStyle = {
        cursor: 'default',
        backgroundColor: bgColor,
        color: labelColor || 'white',
        opacity: 0.3
    };
    const blockStyles = {
        width: '100%',
        margin: '0 auto'
    };
    let buttonStyle;
    switch (type) {
        case 'rounded':
            buttonStyle = roundedStyle;
            break;
        case 'block':
            buttonStyle = blockStyles;
            break;
        case 'outline':
            if (hover) {
                buttonStyle = outlineHoverStyle;
            } else {
                buttonStyle = outlineStyles;
            }
            break;
        default:
            buttonStyle = {
                backgroundColor: bgColor,
                color: labelColor || 'white'
            };
            break;
    }
    return (
        <Button
            style={
                disabled
                    ? { ...commonStyles, ...buttonStyle, ...disabledStyle, ...style }
                    : { ...commonStyles, ...buttonStyle, ...style }
            }
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            {...props}
            type="button"
            fSize={fontSize}
            fWeight={fontWeight}
            width={buttonWidth}
            onClick={!disabled ? onClick : () => {}}>
            {children || 'button'}
        </Button>
    );
}

GenericButton.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    bgColor: PropTypes.string,
    bkground: PropTypes.string,
    labelColor: PropTypes.string,
    disabled: PropTypes.any,
    type: PropTypes.string,
    fontWeight: PropTypes.string,
    fontSize: PropTypes.string,
    buttonWidth: PropTypes.any,
    style: PropTypes.any
};
