// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import AdminDefinition from './admin_definition';

describe('Team Edition admin definition', () => {
    test('removes commercial sections and feature-discovery entries', () => {
        expect(AdminDefinition.compliance).toBeUndefined();
        expect(AdminDefinition.about).toBeUndefined();

        expect(AdminDefinition.authentication.subsections).not.toHaveProperty('ldap');
        expect(AdminDefinition.authentication.subsections).not.toHaveProperty('ldap_feature_discovery');
        expect(AdminDefinition.authentication.subsections).not.toHaveProperty('saml');
        expect(AdminDefinition.authentication.subsections).not.toHaveProperty('saml_feature_discovery');
        expect(AdminDefinition.authentication.subsections).not.toHaveProperty('openid');
        expect(AdminDefinition.authentication.subsections).not.toHaveProperty('openid_feature_discovery');

        const discoveryEntries = Object.values(AdminDefinition).flatMap((section) => (
            Object.values(section.subsections).filter((subsection) => subsection.isDiscovery)
        ));

        expect(discoveryEntries).toHaveLength(0);
    });
});
