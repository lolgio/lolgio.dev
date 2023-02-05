import type { Component } from "solid-js";
import { FiMapPin, FiGithub, FiTwitter } from "solid-icons/fi";
import { FaBrandsLinkedinIn } from "solid-icons/fa";
import { Motion } from "@motionone/solid";
import NzMap from "../assets/nz.svg";
import PinDrop from "../components/PinDrop";
import PageWrapper from "./PageWrapper";

const Landing: Component = () => {
    return (
        <PageWrapper>
            <div class="flex flex-row gaps-48 justify-center w-full h-full">
                <div class="flex flex-col justify-center my-auto">
                    <h1 class="text-6xl font-bold">
                        hi,
                        <br />
                        I'm Gio
                    </h1>
                    <h2 class="text-2xl font-light mt-4">
                        fullstack web developer.
                        <br />
                        22 m.
                        <br />
                        <FiMapPin class="inline-block stroke-highlight" /> auckland, nz.
                    </h2>
                    <br />
                    <div id="socials" class="flex gap-8 mt-8">
                        <a href="https://github.com/lolgio" target="_blank">
                            <FiGithub class="text-3xl" />
                        </a>
                        <a href="https://twitter.com/lolgio73" target="_blank">
                            <FiTwitter class="text-3xl" />
                        </a>
                        <a
                            href="https://nz.linkedin.com/in/giovanni-glendining-7334b9248"
                            target="_blank"
                        >
                            <FaBrandsLinkedinIn class="text-3xl" />
                        </a>
                    </div>
                </div>
                <div class="flex ml-96 mt-32 my-auto">
                    <Motion.img
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.4, delay: 0.2, easing: "ease" }}
                        src={NzMap}
                        class="h-2/3 will-change-transform"
                    />
                    <div class="absolute translate-x-[224px] -translate-y-[9px]">
                        <PinDrop />
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default Landing;
