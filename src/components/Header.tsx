"use client";
import { ArrowRight, LogOut, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
	MobileNav,
	MobileNavHeader,
	MobileNavMenu,
	MobileNavToggle,
	NavBody,
	Navbar,
	NavbarButton,
	NavItems,
} from "@/components/ui/resizeble-navbar";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
	const { user, logout } = useAuth();
	const navigate = useNavigate();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const handleLogout = () => {
		logout();
		navigate("/");
	};

	const navItems = user
		? [
				{ name: "Dashboard", link: "/dashboard" },
				{ name: "Análise de Vaga", link: "/analysis" },
				{ name: "Suporte", link: "/support" },
			]
		: [
				{ name: "Como funciona", link: "#como-funciona" },
				{ name: "Benefícios", link: "#beneficios" },
				{ name: "FAQ", link: "#faq" },
			];

	return (
		<div className="relative w-full">
			<Navbar className="fixed top-0 left-0 w-full z-50">
				<NavBody>
					<Link
						to={user ? "/dashboard" : "/"}
						className="text-2xl font-bold cursor-pointer z-50 text-black"
					>
						Aalvo
					</Link>

					<NavItems
						items={navItems.map((item) => ({
							name: item.name,
							link: item.link,
						}))}
					/>

					<div className="flex items-center gap-4">
						{user ? (
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button
										variant="ghost"
										className="flex items-center cursor-pointer z-50 gap-2"
									>
										<User className="h-4 w-4" />
										<span className="hidden sm:inline">{user.name}</span>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end" className="z-[9999]">
									<DropdownMenuItem asChild>
										<Link to="/profile" className="flex items-center">
											<User className="h-4 w-4 mr-2" />
											Perfil
										</Link>
									</DropdownMenuItem>
									<DropdownMenuItem onClick={handleLogout}>
										<LogOut className="h-4 w-4 mr-2" />
										Sair
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						) : (
							<Link to="/signup">
								<NavbarButton className="border shadow-none group flex items-center font-normal">
									Teste gratuito
									<ArrowRight className="h-3 w-3 font-normal ml-2 group-hover:translate-x-1 transition-transform" />
								</NavbarButton>
							</Link>
						)}
					</div>
				</NavBody>

				{/* Mobile Navigation */}
				<MobileNav>
					<MobileNavHeader>
						<Link
							to={user ? "/dashboard" : "/"}
							className="text-xl font-bold text-black"
						>
							Aalvo
						</Link>
						<MobileNavToggle
							isOpen={isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						/>
					</MobileNavHeader>

					<MobileNavMenu
						isOpen={isMobileMenuOpen}
						onClose={() => setIsMobileMenuOpen(false)}
					>
						{navItems.map((item) => (
							<Link
								key={`mobile-link-${item.link}`}
								to={item.link}
								onClick={() => setIsMobileMenuOpen(false)}
								className="relative text-neutral-600 dark:text-neutral-300"
							>
								{item.name}
							</Link>
						))}

						<div className="flex w-full flex-col gap-4 mt-4">
							{user ? (
								<>
									<Link
										to="/profile"
										onClick={() => setIsMobileMenuOpen(false)}
									>
										<NavbarButton className="w-full" variant="secondary">
											Perfil
										</NavbarButton>
									</Link>
									<NavbarButton
										onClick={() => {
											handleLogout();
											setIsMobileMenuOpen(false);
										}}
										variant="primary"
										className="w-full"
									>
										Sair
									</NavbarButton>
								</>
							) : (
								<>
									<Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
										<NavbarButton className="w-full" variant="secondary">
											Entrar
										</NavbarButton>
									</Link>
									<Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
										<NavbarButton className="w-full" variant="primary">
											Comece grátis
										</NavbarButton>
									</Link>
								</>
							)}
						</div>
					</MobileNavMenu>
				</MobileNav>
			</Navbar>
		</div>
	);
};

export default Header;
