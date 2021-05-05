import 'antd/dist/antd.css';

import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { Alert, Spin } from 'antd';
import React, { useEffect, useState } from 'react';

import { getParsedData } from './api';
import useLocale from './hooks/useLocale';
import HighlightedComponentsProvider from './providers/HighlightedComponentsProvider';
import I18nWatchLocaleProvider from './providers/I18nWatchLocaleProvider';
import ThemeProvider from './providers/ThemeProvider';
import ComponentTree from './styles/molecules/ComponentTree';
import DefaultLayout from './styles/templates/DefaultLayout';
import { activate } from './utils';
import { getLayoutedElements } from './utils/graphUtils';

const App = () => {
  const { locale } = useLocale();
  const [elements, setElements] = useState(null);
  const [nodeDetail, setNodeDetail] = useState({ visible: false, node: null });
  const [info, setInfo] = useState(null);

  useEffect(() => {
    activate(locale);
    getParsedData()
      .then((data) => {
        setInfo(data.info);
        setElements(
          getLayoutedElements(
            [].concat(
              data.nodes.map((node) => {
                return {
                  ...node,
                  data: {
                    ...node.data,
                    onShowNodeDetail: (node) =>
                      setNodeDetail({ visible: true, node: node }),
                  },
                };
              }),
              data.edges.map((edge) => {
                return {
                  ...edge,
                  labelBgPadding: [8, 4],
                  labelBgBorderRadius: 4,
                  labelBgStyle: {
                    fill: '#001529',
                    fillOpacity: 0.7,
                  },
                  labelStyle: {
                    fill: '#fff',
                  },
                  style: { stroke: edge.label ? 'red' : '#000' },
                };
              })
            )
          )
        );
      })
      .catch(console.log);
  }, [locale]);
  return (
    <I18nProvider i18n={i18n}>
      <I18nWatchLocaleProvider>
        <ThemeProvider>
          <HighlightedComponentsProvider>
            <DefaultLayout
              info={info}
              nodeDetail={nodeDetail}
              setNodeDetail={setNodeDetail}
            >
              {elements ? (
                <ComponentTree elements={elements} />
              ) : (
                <Spin spinning={true}>
                  <Alert
                    message="Nothing to show"
                    description="Could not find any components to display"
                    type="warning"
                  />
                </Spin>
              )}
            </DefaultLayout>
          </HighlightedComponentsProvider>
        </ThemeProvider>
      </I18nWatchLocaleProvider>
    </I18nProvider>
  );
};

export default App;
