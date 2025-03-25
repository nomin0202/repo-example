/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton, Menu, MenuItem, Divider } from "@mui/material";
import logo from "../img/caliverse_logo.png";
import mobile_logo from "../img/mobile_logo.png";
import star from "../img/Vector.png";
import sum from "../img/sum.png";
import wallet from "../img/wallet.png";
import globe from "../img/wlrnqhs.png";
import headerwallet from "../img/wallet_icon.png";
import hamburger from "../img/ham.png";
import sum2 from "../img/layer1.png";
import "../../src/App.css";
import "../../src/css/Header.css";

function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const email = "abc@gmail.com";
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
        setIsMobileMenuOpen(true);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setIsMobileMenuOpen(false);
    };

    // 창 크기가 변경될 때, 모바일 메뉴가 열려 있으면 닫아줌
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 600) {
                handleMenuClose(); // 화면이 커지면 메뉴 닫기
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div className="header">
            <img src={logo} className="logo" alt="logo" />
            <img src={mobile_logo} className="mobile_logo" alt="mobile_logo" />
            <div className="headerright">
                <Box sx={{ 
                    display: "flex", 
                    alignItems: "center", 
                    fontSize: "16px", 
                    color: "white", 
                    fontWeight: '600' }}>
                    <Box sx={{ display: "flex", gap:'25px' }}>
                        <p>About</p>
                        <p>Portal</p>
                        <p>NFT</p>
                    </Box>
                    <Divider sx={{ width: "2px", height: "16px", backgroundColor: "#fff", marginLeft:'27px'}} />
                    <div className="Myinventory">
                        <img className="headericon" src={star} style={{ width: "17px", height: "16px",marginLeft:'30.5px' }} alt="star" />
                        <Typography
                            sx={{
                                background: "linear-gradient(to bottom, #22EE9F 25%, #00C8D4 100%)",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                                fontFamily: "Pretendard",
                                fontWeight: "600",
                                whiteSpace: 'nowrap',
                                marginLeft:'10px'
                            }}>
                            My Inventory
                        </Typography>
                    </div>
                </Box>
                <div className="emailbutton" style={{ width: '212px', marginLeft:'27px'}}>
                    <Box
                        sx={{
                            width: "auto",
                            maxWidth: "250px",
                            height: "42px",
                            textTransform: "none",
                            color: "white",
                            display: "flex",
                            flexDirection: "row",
                            // justifyContent: "center",
                            border: "1px solid white",
                            borderRadius: 100,
                            alignItems: "center",
                            // gap: "6px",
                            // padding: "0 10px",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                        }}
                    >
                        <img className="headericon" src={wallet} style={{ width: "16px", height: "14px" ,marginLeft:'21px'}} alt="wallet" />
                        <Typography sx={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", fontWeight: '600', marginLeft:'10px'}}>
                            {email}
                        </Typography>
                        <img className="headericon" src={sum} style={{ width: "8px", height: "5px", marginLeft:'14px', marginRight:'25px' }} alt="sum" />
                    </Box>
                </div>

                <div className="language">
                    <img src={globe} className="headericon" alt="globe" />
                    <Typography sx={{ fontSize: "13px", fontFamily: "Pretendard", fontWeight: "800", letterSpacing: "2px", marginLeft:'10px'}}>
                        KR
                    </Typography>
                    <img src={sum2} className="headericon" style={{ width: "6px", height: "3px", marginLeft: '8.62px' }} alt="sum2" />
                </div>
            </div>
            <div className="header_button">
                <div className="wallet-button" onClick={handleMenuClick} style={{ width: '25px', height: '20px' }}>
                    <img src={headerwallet} style={{ width: '100%' }} />
                </div>
                <div className="hamburger-button" onClick={handleMenuClick} style={{ width: '23px', height: '20px' }}>
                    <img src={hamburger} style={{ width: '100%' }} />
                </div>
            </div>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItem onClick={handleMenuClose}>About</MenuItem>
                <MenuItem onClick={handleMenuClose}>Portal</MenuItem>
                <MenuItem onClick={handleMenuClose}>NFT</MenuItem>
                <MenuItem onClick={handleMenuClose}>{email}</MenuItem>
            </Menu>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItem onClick={handleMenuClose}>About</MenuItem>
                <MenuItem onClick={handleMenuClose}>Portal</MenuItem>
                <MenuItem onClick={handleMenuClose}>NFT</MenuItem>
                <MenuItem onClick={handleMenuClose}>{email}</MenuItem>
            </Menu>
        </div>
    );
}

export default Header;
