// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {useIntl} from 'react-intl';

import LexocratesLogo from 'images/lexocrates-logo.png';

export default function MattermostLogo(props: React.HTMLAttributes<HTMLSpanElement>) {
    const {formatMessage} = useIntl();
    return (
        <span {...props}>
            <svg
                version='1.1'
                x='0px'
                y='0px'
                viewBox='0 0 500 500'
                enableBackground='new 0 0 500 500'
                role='img'
                aria-label={formatMessage({id: 'generic_icons.mattermost', defaultMessage: 'Mattermost Logo'})}
            >
                <image
                    href={LexocratesLogo}
                    xlinkHref={LexocratesLogo}
                    x='0'
                    y='0'
                    width='500'
                    height='500'
                    preserveAspectRatio='xMidYMid meet'
                />
            </svg>
        </span>
    );
}
