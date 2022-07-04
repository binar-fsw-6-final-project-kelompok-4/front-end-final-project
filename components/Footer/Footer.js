import Button from "../../styles/button.js";
import BrandIcon from "../Logo/TextSecondHand";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h6 className="mt-2">Beginners</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button isExternal type="link" href="/register">
                                    Create Account
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button isExternal type="link" href="/properties">
                                    Start Buy
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button isExternal type="link" href="/use-payments">
                                    Use Payments
                                </Button>
                            </li>
                        </ul>
                    </div>

                    <div className="col-3">
                        <h6 className="mt-2">Explore Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button isExternal type="link" href="/careers">
                                    Our Careers
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button isExternal type="link" href="/privacy">
                                    Privacy
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button
                                    isExternal
                                    type="link"
                                    href="/terms">
                                    Terms & Conditions
                                </Button>
                            </li>
                        </ul>
                    </div>

                    <div className="col-3">
                        <h6 className="mt-2">Connect Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button
                                    isExternal
                                    type="link"
                                    href="mailto:fsw6@kelompok4.com"
                                >
                                    fsw6@kelompok4.com
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button isExternal type="link" href="tel:+622122081996">
                                    085 - 1122 - 3344
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <span>Kelompok 4, Binar</span>
                            </li>
                        </ul>
                    </div>

                    <div className="col-3">
                        <div href="#" className="foter brand bg-color-primary"></div>
                        <div className="fot"> <BrandIcon /> </div>
                        <p className="brand-tagline">FSW 6 : Kelompok 4</p>
                    </div>

                </div>
                <div className="row">
                    <div className="col text-center copyrights">
                        Copyright 2022 • Binar Academy • Full Stack Web 6 • Kelompok 4
                    </div>
                </div>
            </div>
        </footer >
    );
}
