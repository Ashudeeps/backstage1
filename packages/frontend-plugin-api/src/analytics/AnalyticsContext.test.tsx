/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react';
import { AnalyticsContext, useAnalyticsContext } from './AnalyticsContext';

const AnalyticsSpy = () => {
  const context = useAnalyticsContext();
  return (
    <>
      <div data-testid="plugin-id">{context.pluginId}</div>
      <div data-testid="extension-id">{context.extensionId}</div>
      <div data-testid="custom">{context.custom}</div>
    </>
  );
};

describe('AnalyticsContext', () => {
  describe('useAnalyticsContext', () => {
    it('returns default values', () => {
      const { result } = renderHook(() => useAnalyticsContext());
      expect(result.current).toEqual({
        extensionId: 'app',
        pluginId: 'app',
      });
    });
  });

  describe('AnalyticsContext', () => {
    it('uses default analytics context', () => {
      const result = render(
        <AnalyticsContext attributes={{}}>
          <AnalyticsSpy />
        </AnalyticsContext>,
      );

      expect(result.getByTestId('extension-id')).toHaveTextContent('app');
      expect(result.getByTestId('plugin-id')).toHaveTextContent('app');
    });

    it('uses provided analytics context', () => {
      const result = render(
        <AnalyticsContext attributes={{ pluginId: 'custom' }}>
          <AnalyticsSpy />
        </AnalyticsContext>,
      );

      expect(result.getByTestId('extension-id')).toHaveTextContent('app');
      expect(result.getByTestId('plugin-id')).toHaveTextContent('custom');
    });

    it('uses nested analytics context', () => {
      const result = render(
        <AnalyticsContext attributes={{ pluginId: 'custom' }}>
          <AnalyticsContext attributes={{ extensionId: 'AnalyticsSpy' }}>
            <AnalyticsSpy />
          </AnalyticsContext>
        </AnalyticsContext>,
      );

      expect(result.getByTestId('extension-id')).toHaveTextContent(
        'AnalyticsSpy',
      );
      expect(result.getByTestId('plugin-id')).toHaveTextContent('custom');
    });
  });
});
