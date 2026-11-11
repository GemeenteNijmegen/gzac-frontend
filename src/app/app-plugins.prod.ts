/*
 * Copyright 2015-2026 Ritense BV, the Netherlands.
 *
 * Licensed under EUPL, Version 1.2 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Used by production/release builds via angular.json fileReplacements (swapped
// in for app-plugins.ts). Keep this list in line with the community plugins in
// gzac-backend's build.gradle.kts; versions are pinned in package.json.
import {ArchiefPluginModule, archiefPluginSpecification} from '@valtimo-plugins/archief';
import {CloudEventPluginModule, cloudEventPluginSpecification} from '@valtimo-plugins/cloud-event';
import {
  ExterneKlanttaakPluginModule,
  externeKlanttaakPluginSpecification,
} from '@valtimo-plugins/externe-klanttaak';
import {
  DocumentGeneratorPluginModule,
  documentGeneratorPluginSpecification,
  MailTemplatePluginModule,
  mailTemplatePluginSpecification,
  TextTemplatePluginModule,
  textTemplatePluginSpecification,
} from '@valtimo-plugins/freemarker';
import {
  HaalCentraalBagPluginModule,
  haalCentraalBagPluginSpecification,
  HaalCentraalBrpPersonenPluginModule,
  haalCentraalBrpPersonenPluginSpecification,
  HaalCentraalBrpPluginModule,
  haalCentraalBrpPluginSpecification,
} from '@valtimo-plugins/haal-centraal';
import {KvkPluginModule, kvkPluginSpecification} from '@valtimo-plugins/kvk-handelsregister';
import {
  MtlsSslcontextPluginModule,
  mTlsSslcontextPluginSpecification,
} from '@valtimo-plugins/mtls-sslcontext';
import {NotifyNlPluginModule, notifyNlPluginSpecification} from '@valtimo-plugins/notify-nl';
import {
  ObjectManagementPluginModule,
  objectManagementPluginSpecification,
} from '@valtimo-plugins/object-management';
import {OipKlanttaakPluginModule, oipKlanttaakPluginSpecification} from '@valtimo-plugins/oip-klanttaak';
import {OpenProductPluginModule, openProductPluginSpecification} from '@valtimo-plugins/open-product';
import {OpenKlantPluginModule, openKlantPluginSpecification} from '@valtimo-plugins/openklant';
import {PublictaskPluginModule, publictaskPluginSpecification} from '@valtimo-plugins/publictask';
import {SlackPluginModule, slackPluginSpecification} from '@valtimo-plugins/slack';
import {SmtpMailPluginModule, smtpmailPluginSpecification} from '@valtimo-plugins/smtpmail';
import {SpotlerPluginModule, spotlerPluginSpecification} from '@valtimo-plugins/spotler';
import {SuwinetPluginModule, suwinetPluginSpecification} from '@valtimo-plugins/suwinet';
import {
  TokenAuthenticationPluginModule,
  tokenAuthenticationPluginSpecification,
} from '@valtimo-plugins/token-authentication';
import {XentialPluginModule, xentialPluginSpecification} from '@valtimo-plugins/xential';

export const pluginImports = [
  ArchiefPluginModule,
  CloudEventPluginModule,
  ExterneKlanttaakPluginModule,
  DocumentGeneratorPluginModule,
  MailTemplatePluginModule,
  TextTemplatePluginModule,
  HaalCentraalBagPluginModule,
  HaalCentraalBrpPersonenPluginModule,
  HaalCentraalBrpPluginModule,
  KvkPluginModule,
  MtlsSslcontextPluginModule,
  NotifyNlPluginModule,
  ObjectManagementPluginModule,
  OipKlanttaakPluginModule,
  OpenProductPluginModule,
  OpenKlantPluginModule,
  PublictaskPluginModule,
  SlackPluginModule,
  SmtpMailPluginModule,
  SpotlerPluginModule,
  SuwinetPluginModule,
  TokenAuthenticationPluginModule,
  XentialPluginModule,
];

export const pluginSpecifications = [
  archiefPluginSpecification,
  cloudEventPluginSpecification,
  externeKlanttaakPluginSpecification,
  documentGeneratorPluginSpecification,
  mailTemplatePluginSpecification,
  textTemplatePluginSpecification,
  haalCentraalBagPluginSpecification,
  haalCentraalBrpPersonenPluginSpecification,
  haalCentraalBrpPluginSpecification,
  kvkPluginSpecification,
  mTlsSslcontextPluginSpecification,
  notifyNlPluginSpecification,
  objectManagementPluginSpecification,
  oipKlanttaakPluginSpecification,
  openProductPluginSpecification,
  openKlantPluginSpecification,
  publictaskPluginSpecification,
  slackPluginSpecification,
  smtpmailPluginSpecification,
  spotlerPluginSpecification,
  suwinetPluginSpecification,
  tokenAuthenticationPluginSpecification,
  xentialPluginSpecification,
];
