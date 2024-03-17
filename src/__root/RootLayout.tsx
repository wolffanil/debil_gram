import { Outlet } from "react-router-dom";
import styled from "styled-components";
import LeftSidebar from "../components/shared/LeftSidebar";

function RootLayout() {
  return (
    <Layout>
      {/* Topbar  */}
      <LeftSidebar />
      <section className="layout__section">
        <Outlet />
      </section>
      {/* Bottombar */}
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  display: flex;

  .layout__section {
    min-width: 1320px;
  }
`;

export default RootLayout;
