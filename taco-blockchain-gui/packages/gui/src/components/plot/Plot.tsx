import React from 'react';
import { Flex, LayoutDashboardSub } from '@taco/core';
import { Route, Routes } from 'react-router-dom';
import PlotOverview from './overview/PlotOverview';
import PlotAdd from './add/PlotAdd';

export default function Plot() {
  return (
    <LayoutDashboardSub>
      <Flex flexDirection="column" gap={3}>
        <Routes>
          <Route index element={<PlotOverview />} />
          <Route path="add" element={<PlotAdd />} />
        </Routes>
      </Flex>
    </LayoutDashboardSub>
  );
}
