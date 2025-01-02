"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Shirts",
    href: "/shirts",
    description: "Classic and modern shirts for the discerning gentleman.",
  },
  {
    title: "T-shirts",
    href: "/t-shirts",
    description: "Classic and modern t-shirts for guys",
  },
  {
    title: "Polos",
    href: "/polos",
    description: "Classic Polos for the discerning gentleman.",
  },
  {
    title: "Jeans",
    href: "/jeans",
    description: "Perfect-fit jeans that blend style and comfort.",
  },
  {
    title: "Watches",
    href: "/watches",
    description: "Timeless watches to enhance your look.",
  },
  {
    title: "Shoes",
    href: "/shoes-for-men",
    description: "Durable and stylish shoes for the modern man.",
  },
];
const componentstwo: { title: string; href: string; description: string }[] = [
  {
    title: "Dresses",
    href: "/dresses",
    description: "Stylish and versatile tops for every occasion.",
  },
  {
    title: "Tops",
    href: "/tops",
    description: "Stylish and versatile tops for every occasion.",
  },
  {
    title: "Pants",
    href: "/pants",
    description: "Comfortable and chic pants to elevate your wardrobe.",
  },
  {
    title: "Acessories/Jewelary",
    href: "/acessories-jewelary",
    description: "Elegant accessories and jewelry to complement any outfit.",
  },
  {
    title: "Shoes",
    href: "/shoes-for-women",
    description: "Trendy and comfortable shoes for every step you take.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Men</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-myWhite">
              {components.map((component) => (
                <Link key={component.title} href={component.href} legacyBehavior passHref>
                  <ListItem title={component.title}>
                    {component.description}
                  </ListItem>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Women</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-myWhite">
              {componentstwo.map((componenttwo) => (
                <Link key={componenttwo.title} href={componenttwo.href} legacyBehavior passHref>
                  <ListItem title={componenttwo.title}>
                    {componenttwo.description}
                  </ListItem>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none group-hover:text-myOrange">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-myBlackPara">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
