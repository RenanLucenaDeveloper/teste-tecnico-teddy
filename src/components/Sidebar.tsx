import type { sidebarProps } from "../types/sidebar-props.type"
import closeMenuSVG from "@assets/icons/close-menu.svg"
import LogoPNG from "@assets/Logo.png"
import HomeIcon from "@assets/icons/home.svg"
import { useMemo } from "react";
import type { routeLink } from "../types/route-link.type";
import { navLinksArray } from "../utils/nav-links-array.util";
import { NavLink } from "react-router";

const Sidebar = ({ setSidebarStatus, sidebarStatus }: sidebarProps) => {
    const routeLinks = useMemo<routeLink[]>(() => navLinksArray, []);

    return (
        <>
            {/* Backdrop */}
            <div 
              onClick={() => setSidebarStatus(false)}
              className={`
                sidebar-backdrop bg-gray-950/50 w-full h-full hidden fixed top-0 left-0 z-999
                ${ sidebarStatus ? 'active' : '' }
              `}>
            </div>


            {/* Sidebar */}
            <div className={`
              sidebar bg-white
              h-full fixed top-0 left-0 z-9999
              translate-x-[-150%] transition-translate duration-300
              app-bg rounded-r-2xl rounded-br-2xl
              ${ sidebarStatus ? 'active' : '' }
            `}>
                <div className="flex align-center justify-center relative py-10 bg-gray-950/70 rounded-r-2xl">
                    <img src={ LogoPNG } alt="Logotipo Teddy Open Finance" width="100px"/>
                    <button 
                      title="Fechar menu"
                      onClick={() => setSidebarStatus(false)}
                      className="
                        bg-black p-3 rounded-full
                        absolute right-0 bottom-0
                        -translate-x-[-50%] -translate-y-[-50%]
                        cursor-pointer
                      "
                    >
                        <img src={ closeMenuSVG } alt="Fechar" width="16px"/>
                    </button>
                </div>

                <ul className="flex flex-col gap-3 px-6 py-12">
                    <li className="p-0 m-0">
                        <NavLink
                          className="no-underline text-base flex align-center gap-4 p-2"
                          to="/">
                              <img src={ HomeIcon } alt="Icon" width="19px"/>
                              Home
                        </NavLink>
                    </li>

                    { routeLinks.map(link => (
                        <li className="p-0 m-0" key={ link.to }>
                            <NavLink
                              className="no-underline text-base flex align-center gap-3 p-2"
                              to={ link.to }>
                                  { link.icon && <img src={ link.icon } alt="Icon"/>}
                                  { link.text }
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Sidebar
