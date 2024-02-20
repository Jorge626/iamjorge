"use client"
import Image from "next/image";
import SpaceImage from "../public/space-amigo.png"
import Button from "@/components/Buttons";
import Link from "next/link";

export default function Home() {
    return (
      <div>
        <div className=" bg-white h-[640px] w-full relative overflow-hidden">
          <Image src={SpaceImage} 
          alt={"Silhouette of person looking up towards the stars. Photo from Unsplash by Greg Rakozy. Contains a quote from the artist Amigo The Devil that reads: Are you feeling upside down or even empty inside? I have a couple different faces, if you need a place to hide. All the parties we can throw. We'll dress like anything we please, or play the role of anyone. Stop by for a drink and didn't leave."} 
          fill
          className="lg:object-cover lg:object-bottom"/>
        </div>
        <div className="py-12 px-12 bg-primary-light">
          <h1 className="text-3xl">
          Hi, friends!
          </h1>
          <p className="pt-1">
            Who am I?
          </p>
          <h1 className="text-3xl text-right">
            I am Jorge!
          </h1>
          <p className="text-right pt-1">
            I&apos;m just another person having a human experience.<br/>
          </p>
          <h1 className="text-3xl pt-4">
            No Social Media.
          </h1>
          <p>
            No Likes. No Comments.
          </p>
          <h1 className="text-3xl text-right pt-4">
            Just me.
          </h1>
          <p className="text-right">
            A place where I can freely express myself.
          </p>
          <h1 className="text-3xl text-center pt-4">
            If you&apos;d like
          </h1>
          <p className="text-center">
            I would love to share a part of me with you.
          </p>
          <div className="flex justify-center">
          <Link href="/about" className="m-4">
            <Button variant="filled" size="40px">Learn About Me</Button>
          </Link>  
          <Link href="/expression" className="m-4">
            <Button variant="filled" size="40px">See My Expressions</Button>
          </Link>
          </div>
        </div>
        <figure className="block text-center py-12 text-lg px-12 ml-auto">
          <blockquote>
            I am the weight this town is never going to lose<br/>
            It&apos;s been a while since I&apos;ve held anything as close as I have you<br/>
            They&apos;ll write about our story here for years to come and maybe even more<br/>
            &apos;Cause there&apos;s never been a love like this before
          </blockquote>
          <figcaption>—Amigo The Devil, <cite>The Weight</cite></figcaption>
        </figure>
      </div>
    );
  }
