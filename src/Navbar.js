/**
 * It creates a navbar for the blog.
 * @returns A navbar with a title and two links.
 */
const Navbar = () => {
  return ( 
    <nav className="navbar">

    <h1>The Dojo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
    </div>
    </nav>
   );
}
 
export default Navbar;