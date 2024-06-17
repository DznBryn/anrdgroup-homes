import type { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"
import {useMatch} from "@remix-run/react"

type Props = {
  children?: ReactNode
}

export default function Layout({
  children
}: Props) {
  const params = useMatch("/")
  console.log()
  return (
		<>
			<Header pathname={params?.pathname ?? null} />
			{children}
			<Footer />
		</>
	);
}