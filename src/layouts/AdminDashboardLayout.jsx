import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { dashbordNavItems } from '../utlils/constants/navItems';

const AdminDashboardLayout = () => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <main>
      <AppShell
        padding="md"
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
      >
        <AppShell.Header>
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
          />

          <div>Logo</div>
        </AppShell.Header>

        <AppShell.Navbar>
          {dashbordNavItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
            >
              {item.name}
            </Link>
          ))}</AppShell.Navbar>

        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </main>
  )
}

export default AdminDashboardLayout;