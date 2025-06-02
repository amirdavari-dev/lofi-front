type HeaderSidebarType = {
  children: string;
};
const HeaderSidebar = ({ children }: HeaderSidebarType) => {
  return (
    <h3 className="header-card">
      {children} <span></span>
    </h3>
  );
};
export default HeaderSidebar;
