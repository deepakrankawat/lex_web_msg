// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import {renderWithContext, screen} from 'tests/react_testing_utils';

import ProductBrandingFreeEdition from './product_branding_free_edition';

describe('ProductBrandingFreeEdition', () => {
    test('should show only the Lexocrates company logo', () => {
        renderWithContext(<ProductBrandingFreeEdition/>);

        expect(screen.getByRole('img', {name: 'Lexocrates Connect'})).toBeInTheDocument();
        expect(screen.queryByText('TEAM EDITION')).not.toBeInTheDocument();
        expect(screen.queryByText('ENTRY EDITION')).not.toBeInTheDocument();
    });
});
