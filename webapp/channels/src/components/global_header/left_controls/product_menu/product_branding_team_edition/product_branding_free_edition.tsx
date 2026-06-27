// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import styled from 'styled-components';

import LexocratesLogoHorizontalLight from 'images/lexocrates-logo-horizontal-light.png';

const ProductBrandingFreeEditionContainer = styled.span`
    display: flex;
    align-items: center;
`;

const StyledLogo = styled.img`
    display: block;
    width: clamp(120px, 10vw, 142px);
    height: auto;
    opacity: 1;
`;

const ProductBrandingFreeEdition = (): JSX.Element => {
    return (
        <ProductBrandingFreeEditionContainer tabIndex={-1}>
            <StyledLogo
                src={LexocratesLogoHorizontalLight}
                alt='Lexocrates Connect'
            />
        </ProductBrandingFreeEditionContainer>
    );
};

export default ProductBrandingFreeEdition;
