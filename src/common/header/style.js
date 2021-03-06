import styled from 'styled-components';
import logo from '../../static/jianshu.png'

export const HeadWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.div`
    position: absolute;
    top:0;
    left:0;
    width:100px;
    height:56px;
    display: block;
    background: url(${logo});
    background-size: contain;
`

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
`

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width:240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`
export const SearchTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`

export const SearchSwitch = styled.span`
    float: right;
    font-size: 13px;
    color: #969696;
    cursor: pointer;
    .spin {
        display: block;
        float: left;
        font-size: 12px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`

export const SearchInfoItem = styled.a`
    float: left;
    margin-right: 10px;
    display: block;
    margin-bottom: 15px;
    line-height: 20px;
    padding:0 5px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #969696;
    border-radius: 2px;
`

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active{
        color: #ea6f5a;
    }
    height: 100%;
`;
export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
        &.focused {
            color: #fff;
            background: #777;
        }
    }
`;
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    margin-top: 9px;
    margin-left: 20px;
    border: none;
    outline:none;
    padding: 0 35px 0 20px;
    border-radius: 19px; 
    box-sizing: border-box;
    font-size:14px;
    background: #eee;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
    // css 动画
    &.slide-enter {
        transition: all .4s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .4s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    font-size: 14px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    &.reg{
        color: #ec6149;
    }
    &.writting{
        color: #fff;
        background: #ec6149;
    }
`