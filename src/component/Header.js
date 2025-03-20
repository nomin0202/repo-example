import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton, Menu, MenuItem, Divider } from "@mui/material";
import { Email, Menu as MenuIcon } from "@mui/icons-material";
import logo from "../img/caliverse_logo.png";
import star from "../img/Vector.png";
import sum from "../img/sum.png";
import wallet from "../img/wallet.png";
import globe from "../img/wlrnqhs.png";
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
            <div className="headerright">
                <Box sx={{ display: "flex", gap: "25px", alignItems: "center", fontSize: "16px", color: "white" }}>
                    <Box sx={{ display: "flex", gap: "25px" }}>
                        <p>About</p>
                        <p>Portal</p>
                        <p>NFT</p>
                    </Box>
                    <Divider sx={{ width: "2px", height: "16px", backgroundColor: "#fff" }} />
                    <div className="Myinventory">
                        <img className="headericon" src={star} style={{ width: "17px", height: "16px" }} alt="star" />
                        <Typography
                            sx={{
                                background: "linear-gradient(to bottom, #22EE9F 25%, #00C8D4 100%)",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                                fontFamily: "Pretendard",
                                fontWeight: "600",
                                whiteSpace:'nowrap'
                            }}>
                            My Inventory
                        </Typography>
                    </div>
                </Box>
                <div className="emailbutton" style={{width:'212px'}}>
                    <Box
                        sx={{
                            width: "auto",
                            maxWidth: "250px",
                            height: "42px",
                            textTransform: "none",
                            color: "white",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            border: "1px solid white",
                            borderRadius: 100,
                            alignItems: "center",
                            gap: "6px",
                            padding: "0 10px",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                        }}
                    >
                        <img className="headericon" src={wallet} style={{ width: "16px", height: "14px" }} alt="wallet" />
                        <Typography sx={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                        {email}
                        </Typography>
                        <img className="headericon" src={sum} style={{ width: "8px", height: "5px", paddingLeft: "7px" }} alt="sum" />
                    </Box>
                </div>

                <div className="language">
                    <img src={globe} className="headericon" alt="globe" />
                    <Typography sx={{ fontSize: "13px", fontFamily: "Pretendard", fontWeight: "800", letterSpacing: "2px" }}>
                        KR
                    </Typography>
                    <img src={sum} className="headericon" style={{ width: "7px", height: "5px" }} alt="sum" />
                </div>
            </div>
            <div className="hamburger-button">
                <IconButton onClick={handleMenuClick}>
                    <MenuIcon sx={{ color: "white" }} />
                </IconButton>
            </div>
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
