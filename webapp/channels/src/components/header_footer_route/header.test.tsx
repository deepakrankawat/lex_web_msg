// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import {renderWithContext, screen} from 'tests/react_testing_utils';

import Header from './header';

describe('Header', () => {
    test('shows Lexocrates branding without an edition badge', () => {
        const state = {
            entities: {
                general: {
                    config: {
                        SiteName: 'Lexocrates Connect',
                    },
                    license: {
                        IsLicensed: 'false',
                    },
                },
            },
        };

        renderWithContext(<Header/>, state);

        expect(screen.getByRole('link', {name: 'Lexocrates Connect'})).toBeInTheDocument();
        expect(screen.queryByText('TEAM EDITION')).not.toBeInTheDocument();
        expect(screen.queryByText('ENTRY EDITION')).not.toBeInTheDocument();
    });
});
