;Saqué la idea de https://pastebin.com/HDHmmbQr
;esta config es una mezcla de su config y la mía para tener la rueda del ratón 
;Sigo sin poder replicar el shift+rueda

WinGet, wowid, List, World of Warcraft
;***********************************************
;Standard Keyboard keys
;***********************************************
~1::
~2::
~3::
~4::
~5::
~6::
~7::
~8::
~9::
~0::
~-::
~=::
~f::
;~;::
~'::
~c::
~b::
~v::
~,::
~.::
~`::
~/::
IfWinActive, ahk_id %wowid1%
{
StringTrimLeft, ThisKey, A_ThisHotKey, 1
ControlSend,, %ThisKey%, ahk_id %wowid2%
ControlSend,, %ThisKey%, ahk_id %wowid3%
ControlSend,, %ThisKey%, ahk_id %wowid4%
ControlSend,, %ThisKey%, ahk_id %wowid5%
ControlSend,, %ThisKey%, ahk_id %wowid6%
ControlSend,, %ThisKey%, ahk_id %wowid7%
Return
}

WinGet, wowid, list, World of Warcraft 

;***********************************************
;Shift + Standard Keyboard keys
;***********************************************
~+1::
~+2::
~+3::
~+4::
~+5::
~+6::
~+7::
~+8::
~+9::
~+0::
~+-::
~+=::
~+f::
~+g::
;~+;::
~+'::
~+z::
~+x::
~+c::
~+v::
~+,::
~+.::
~+`::
~+/::
IfWinActive, ahk_id %wowid1%
{
StringTrimLeft, ThisKey, A_ThisHotKey, 1
ControlSend,, {shift down}%thiskey%{shift up}, ahk_id %wowid2%
Return
}

F10::
{
RandSleep(250,500),
ControlSend,, {1}, ahk_id %wowid1%
ControlSend,, {1}, ahk_id %wowid2%
ControlSend,, {1}, ahk_id %wowid3%
ControlSend,, {1}, ahk_id %wowid4%
ControlSend,, {1}, ahk_id %wowid5%
ControlSend,, {1}, ahk_id %wowid6%
ControlSend,, {1}, ahk_id %wowid7%
ControlSend,, {1}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {2}, ahk_id %wowid1%
ControlSend,, {2}, ahk_id %wowid2%
ControlSend,, {2}, ahk_id %wowid3%
ControlSend,, {2}, ahk_id %wowid4%
ControlSend,, {2}, ahk_id %wowid5%
ControlSend,, {2}, ahk_id %wowid6%
ControlSend,, {2}, ahk_id %wowid7%
ControlSend,, {2}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {3}, ahk_id %wowid1%
ControlSend,, {3}, ahk_id %wowid2%
ControlSend,, {3}, ahk_id %wowid3%
ControlSend,, {3}, ahk_id %wowid4%
ControlSend,, {3}, ahk_id %wowid5%
ControlSend,, {3}, ahk_id %wowid6%
ControlSend,, {3}, ahk_id %wowid7%
ControlSend,, {3}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {4}, ahk_id %wowid1%
ControlSend,, {4}, ahk_id %wowid2%
ControlSend,, {4}, ahk_id %wowid3%
ControlSend,, {4}, ahk_id %wowid4%
ControlSend,, {4}, ahk_id %wowid5%
ControlSend,, {4}, ahk_id %wowid6%
ControlSend,, {4}, ahk_id %wowid7%
ControlSend,, {4}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {0}, ahk_id %wowid1%
ControlSend,, {0}, ahk_id %wowid2%
ControlSend,, {0}, ahk_id %wowid3%
ControlSend,, {0}, ahk_id %wowid4%
ControlSend,, {0}, ahk_id %wowid5%
ControlSend,, {0}, ahk_id %wowid6%
ControlSend,, {0}, ahk_id %wowid7%
ControlSend,, {0}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {f}, ahk_id %wowid1%
ControlSend,, {f}, ahk_id %wowid2%
ControlSend,, {f}, ahk_id %wowid3%
ControlSend,, {f}, ahk_id %wowid4%
ControlSend,, {f}, ahk_id %wowid5%
ControlSend,, {f}, ahk_id %wowid6%
ControlSend,, {f}, ahk_id %wowid7%
ControlSend,, {f}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {m}, ahk_id %wowid1%
ControlSend,, {m}, ahk_id %wowid2%
ControlSend,, {m}, ahk_id %wowid3%
ControlSend,, {m}, ahk_id %wowid4%
ControlSend,, {m}, ahk_id %wowid5%
ControlSend,, {m}, ahk_id %wowid6%
ControlSend,, {m}, ahk_id %wowid7%
ControlSend,, {m}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {1}, ahk_id %wowid1%
ControlSend,, {1}, ahk_id %wowid2%
ControlSend,, {1}, ahk_id %wowid3%
ControlSend,, {1}, ahk_id %wowid4%
ControlSend,, {1}, ahk_id %wowid5%
ControlSend,, {1}, ahk_id %wowid6%
ControlSend,, {1}, ahk_id %wowid7%
ControlSend,, {1}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {2}, ahk_id %wowid1%
ControlSend,, {2}, ahk_id %wowid2%
ControlSend,, {2}, ahk_id %wowid3%
ControlSend,, {2}, ahk_id %wowid4%
ControlSend,, {2}, ahk_id %wowid5%
ControlSend,, {2}, ahk_id %wowid6%
ControlSend,, {2}, ahk_id %wowid7%
ControlSend,, {2}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {3}, ahk_id %wowid1%
ControlSend,, {3}, ahk_id %wowid2%
ControlSend,, {3}, ahk_id %wowid3%
ControlSend,, {3}, ahk_id %wowid4%
ControlSend,, {3}, ahk_id %wowid5%
ControlSend,, {3}, ahk_id %wowid6%
ControlSend,, {3}, ahk_id %wowid7%
ControlSend,, {3}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {4}, ahk_id %wowid1%
ControlSend,, {4}, ahk_id %wowid2%
ControlSend,, {4}, ahk_id %wowid3%
ControlSend,, {4}, ahk_id %wowid4%
ControlSend,, {4}, ahk_id %wowid5%
ControlSend,, {4}, ahk_id %wowid6%
ControlSend,, {4}, ahk_id %wowid7%
ControlSend,, {4}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {0}, ahk_id %wowid1%
ControlSend,, {0}, ahk_id %wowid2%
ControlSend,, {0}, ahk_id %wowid3%
ControlSend,, {0}, ahk_id %wowid4%
ControlSend,, {0}, ahk_id %wowid5%
ControlSend,, {0}, ahk_id %wowid6%
ControlSend,, {0}, ahk_id %wowid7%
ControlSend,, {0}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {f}, ahk_id %wowid1%
ControlSend,, {f}, ahk_id %wowid2%
ControlSend,, {f}, ahk_id %wowid3%
ControlSend,, {f}, ahk_id %wowid4%
ControlSend,, {f}, ahk_id %wowid5%
ControlSend,, {f}, ahk_id %wowid6%
ControlSend,, {f}, ahk_id %wowid7%
ControlSend,, {f}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {m}, ahk_id %wowid1%
ControlSend,, {m}, ahk_id %wowid2%
ControlSend,, {m}, ahk_id %wowid3%
ControlSend,, {m}, ahk_id %wowid4%
ControlSend,, {m}, ahk_id %wowid5%
ControlSend,, {m}, ahk_id %wowid6%
ControlSend,, {m}, ahk_id %wowid7%
ControlSend,, {m}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {1}, ahk_id %wowid1%
ControlSend,, {1}, ahk_id %wowid2%
ControlSend,, {1}, ahk_id %wowid3%
ControlSend,, {1}, ahk_id %wowid4%
ControlSend,, {1}, ahk_id %wowid5%
ControlSend,, {1}, ahk_id %wowid6%
ControlSend,, {1}, ahk_id %wowid7%
ControlSend,, {1}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {2}, ahk_id %wowid1%
ControlSend,, {2}, ahk_id %wowid2%
ControlSend,, {2}, ahk_id %wowid3%
ControlSend,, {2}, ahk_id %wowid4%
ControlSend,, {2}, ahk_id %wowid5%
ControlSend,, {2}, ahk_id %wowid6%
ControlSend,, {2}, ahk_id %wowid7%
ControlSend,, {2}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {3}, ahk_id %wowid1%
ControlSend,, {3}, ahk_id %wowid2%
ControlSend,, {3}, ahk_id %wowid3%
ControlSend,, {3}, ahk_id %wowid4%
ControlSend,, {3}, ahk_id %wowid5%
ControlSend,, {3}, ahk_id %wowid6%
ControlSend,, {3}, ahk_id %wowid7%
ControlSend,, {3}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {4}, ahk_id %wowid1%
ControlSend,, {4}, ahk_id %wowid2%
ControlSend,, {4}, ahk_id %wowid3%
ControlSend,, {4}, ahk_id %wowid4%
ControlSend,, {4}, ahk_id %wowid5%
ControlSend,, {4}, ahk_id %wowid6%
ControlSend,, {4}, ahk_id %wowid7%
ControlSend,, {4}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {0}, ahk_id %wowid1%
ControlSend,, {0}, ahk_id %wowid2%
ControlSend,, {0}, ahk_id %wowid3%
ControlSend,, {0}, ahk_id %wowid4%
ControlSend,, {0}, ahk_id %wowid5%
ControlSend,, {0}, ahk_id %wowid6%
ControlSend,, {0}, ahk_id %wowid7%
ControlSend,, {0}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {f}, ahk_id %wowid1%
ControlSend,, {f}, ahk_id %wowid2%
ControlSend,, {f}, ahk_id %wowid3%
ControlSend,, {f}, ahk_id %wowid4%
ControlSend,, {f}, ahk_id %wowid5%
ControlSend,, {f}, ahk_id %wowid6%
ControlSend,, {f}, ahk_id %wowid7%
ControlSend,, {f}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {m}, ahk_id %wowid1%
ControlSend,, {m}, ahk_id %wowid2%
ControlSend,, {m}, ahk_id %wowid3%
ControlSend,, {m}, ahk_id %wowid4%
ControlSend,, {m}, ahk_id %wowid5%
ControlSend,, {m}, ahk_id %wowid6%
ControlSend,, {m}, ahk_id %wowid7%
ControlSend,, {m}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {1}, ahk_id %wowid1%
ControlSend,, {1}, ahk_id %wowid2%
ControlSend,, {1}, ahk_id %wowid3%
ControlSend,, {1}, ahk_id %wowid4%
ControlSend,, {1}, ahk_id %wowid5%
ControlSend,, {1}, ahk_id %wowid6%
ControlSend,, {1}, ahk_id %wowid7%
ControlSend,, {1}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {2}, ahk_id %wowid1%
ControlSend,, {2}, ahk_id %wowid2%
ControlSend,, {2}, ahk_id %wowid3%
ControlSend,, {2}, ahk_id %wowid4%
ControlSend,, {2}, ahk_id %wowid5%
ControlSend,, {2}, ahk_id %wowid6%
ControlSend,, {2}, ahk_id %wowid7%
ControlSend,, {2}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {3}, ahk_id %wowid1%
ControlSend,, {3}, ahk_id %wowid2%
ControlSend,, {3}, ahk_id %wowid3%
ControlSend,, {3}, ahk_id %wowid4%
ControlSend,, {3}, ahk_id %wowid5%
ControlSend,, {3}, ahk_id %wowid6%
ControlSend,, {3}, ahk_id %wowid7%
ControlSend,, {3}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {4}, ahk_id %wowid1%
ControlSend,, {4}, ahk_id %wowid2%
ControlSend,, {4}, ahk_id %wowid3%
ControlSend,, {4}, ahk_id %wowid4%
ControlSend,, {4}, ahk_id %wowid5%
ControlSend,, {4}, ahk_id %wowid6%
ControlSend,, {4}, ahk_id %wowid7%
ControlSend,, {4}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {0}, ahk_id %wowid1%
ControlSend,, {0}, ahk_id %wowid2%
ControlSend,, {0}, ahk_id %wowid3%
ControlSend,, {0}, ahk_id %wowid4%
ControlSend,, {0}, ahk_id %wowid5%
ControlSend,, {0}, ahk_id %wowid6%
ControlSend,, {0}, ahk_id %wowid7%
ControlSend,, {0}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {f}, ahk_id %wowid1%
ControlSend,, {f}, ahk_id %wowid2%
ControlSend,, {f}, ahk_id %wowid3%
ControlSend,, {f}, ahk_id %wowid4%
ControlSend,, {f}, ahk_id %wowid5%
ControlSend,, {f}, ahk_id %wowid6%
ControlSend,, {f}, ahk_id %wowid7%
ControlSend,, {f}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {m}, ahk_id %wowid1%
ControlSend,, {m}, ahk_id %wowid2%
ControlSend,, {m}, ahk_id %wowid3%
ControlSend,, {m}, ahk_id %wowid4%
ControlSend,, {m}, ahk_id %wowid5%
ControlSend,, {m}, ahk_id %wowid6%
ControlSend,, {m}, ahk_id %wowid7%
ControlSend,, {m}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {1}, ahk_id %wowid1%
ControlSend,, {1}, ahk_id %wowid2%
ControlSend,, {1}, ahk_id %wowid3%
ControlSend,, {1}, ahk_id %wowid4%
ControlSend,, {1}, ahk_id %wowid5%
ControlSend,, {1}, ahk_id %wowid6%
ControlSend,, {1}, ahk_id %wowid7%
ControlSend,, {1}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {2}, ahk_id %wowid1%
ControlSend,, {2}, ahk_id %wowid2%
ControlSend,, {2}, ahk_id %wowid3%
ControlSend,, {2}, ahk_id %wowid4%
ControlSend,, {2}, ahk_id %wowid5%
ControlSend,, {2}, ahk_id %wowid6%
ControlSend,, {2}, ahk_id %wowid7%
ControlSend,, {2}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {3}, ahk_id %wowid1%
ControlSend,, {3}, ahk_id %wowid2%
ControlSend,, {3}, ahk_id %wowid3%
ControlSend,, {3}, ahk_id %wowid4%
ControlSend,, {3}, ahk_id %wowid5%
ControlSend,, {3}, ahk_id %wowid6%
ControlSend,, {3}, ahk_id %wowid7%
ControlSend,, {3}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {4}, ahk_id %wowid1%
ControlSend,, {4}, ahk_id %wowid2%
ControlSend,, {4}, ahk_id %wowid3%
ControlSend,, {4}, ahk_id %wowid4%
ControlSend,, {4}, ahk_id %wowid5%
ControlSend,, {4}, ahk_id %wowid6%
ControlSend,, {4}, ahk_id %wowid7%
ControlSend,, {4}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {0}, ahk_id %wowid1%
ControlSend,, {0}, ahk_id %wowid2%
ControlSend,, {0}, ahk_id %wowid3%
ControlSend,, {0}, ahk_id %wowid4%
ControlSend,, {0}, ahk_id %wowid5%
ControlSend,, {0}, ahk_id %wowid6%
ControlSend,, {0}, ahk_id %wowid7%
ControlSend,, {0}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {f}, ahk_id %wowid1%
ControlSend,, {f}, ahk_id %wowid2%
ControlSend,, {f}, ahk_id %wowid3%
ControlSend,, {f}, ahk_id %wowid4%
ControlSend,, {f}, ahk_id %wowid5%
ControlSend,, {f}, ahk_id %wowid6%
ControlSend,, {f}, ahk_id %wowid7%
ControlSend,, {f}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {m}, ahk_id %wowid1%
ControlSend,, {m}, ahk_id %wowid2%
ControlSend,, {m}, ahk_id %wowid3%
ControlSend,, {m}, ahk_id %wowid4%
ControlSend,, {m}, ahk_id %wowid5%
ControlSend,, {m}, ahk_id %wowid6%
ControlSend,, {m}, ahk_id %wowid7%
ControlSend,, {m}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {1}, ahk_id %wowid1%
ControlSend,, {1}, ahk_id %wowid2%
ControlSend,, {1}, ahk_id %wowid3%
ControlSend,, {1}, ahk_id %wowid4%
ControlSend,, {1}, ahk_id %wowid5%
ControlSend,, {1}, ahk_id %wowid6%
ControlSend,, {1}, ahk_id %wowid7%
ControlSend,, {1}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {2}, ahk_id %wowid1%
ControlSend,, {2}, ahk_id %wowid2%
ControlSend,, {2}, ahk_id %wowid3%
ControlSend,, {2}, ahk_id %wowid4%
ControlSend,, {2}, ahk_id %wowid5%
ControlSend,, {2}, ahk_id %wowid6%
ControlSend,, {2}, ahk_id %wowid7%
ControlSend,, {2}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {3}, ahk_id %wowid1%
ControlSend,, {3}, ahk_id %wowid2%
ControlSend,, {3}, ahk_id %wowid3%
ControlSend,, {3}, ahk_id %wowid4%
ControlSend,, {3}, ahk_id %wowid5%
ControlSend,, {3}, ahk_id %wowid6%
ControlSend,, {3}, ahk_id %wowid7%
ControlSend,, {3}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {4}, ahk_id %wowid1%
ControlSend,, {4}, ahk_id %wowid2%
ControlSend,, {4}, ahk_id %wowid3%
ControlSend,, {4}, ahk_id %wowid4%
ControlSend,, {4}, ahk_id %wowid5%
ControlSend,, {4}, ahk_id %wowid6%
ControlSend,, {4}, ahk_id %wowid7%
ControlSend,, {4}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {0}, ahk_id %wowid1%
ControlSend,, {0}, ahk_id %wowid2%
ControlSend,, {0}, ahk_id %wowid3%
ControlSend,, {0}, ahk_id %wowid4%
ControlSend,, {0}, ahk_id %wowid5%
ControlSend,, {0}, ahk_id %wowid6%
ControlSend,, {0}, ahk_id %wowid7%
ControlSend,, {0}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {f}, ahk_id %wowid1%
ControlSend,, {f}, ahk_id %wowid2%
ControlSend,, {f}, ahk_id %wowid3%
ControlSend,, {f}, ahk_id %wowid4%
ControlSend,, {f}, ahk_id %wowid5%
ControlSend,, {f}, ahk_id %wowid6%
ControlSend,, {f}, ahk_id %wowid7%
ControlSend,, {f}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {m}, ahk_id %wowid1%
ControlSend,, {m}, ahk_id %wowid2%
ControlSend,, {m}, ahk_id %wowid3%
ControlSend,, {m}, ahk_id %wowid4%
ControlSend,, {m}, ahk_id %wowid5%
ControlSend,, {m}, ahk_id %wowid6%
ControlSend,, {m}, ahk_id %wowid7%
ControlSend,, {m}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {1}, ahk_id %wowid1%
ControlSend,, {1}, ahk_id %wowid2%
ControlSend,, {1}, ahk_id %wowid3%
ControlSend,, {1}, ahk_id %wowid4%
ControlSend,, {1}, ahk_id %wowid5%
ControlSend,, {1}, ahk_id %wowid6%
ControlSend,, {1}, ahk_id %wowid7%
ControlSend,, {1}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {2}, ahk_id %wowid1%
ControlSend,, {2}, ahk_id %wowid2%
ControlSend,, {2}, ahk_id %wowid3%
ControlSend,, {2}, ahk_id %wowid4%
ControlSend,, {2}, ahk_id %wowid5%
ControlSend,, {2}, ahk_id %wowid6%
ControlSend,, {2}, ahk_id %wowid7%
ControlSend,, {2}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {3}, ahk_id %wowid1%
ControlSend,, {3}, ahk_id %wowid2%
ControlSend,, {3}, ahk_id %wowid3%
ControlSend,, {3}, ahk_id %wowid4%
ControlSend,, {3}, ahk_id %wowid5%
ControlSend,, {3}, ahk_id %wowid6%
ControlSend,, {3}, ahk_id %wowid7%
ControlSend,, {3}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {4}, ahk_id %wowid1%
ControlSend,, {4}, ahk_id %wowid2%
ControlSend,, {4}, ahk_id %wowid3%
ControlSend,, {4}, ahk_id %wowid4%
ControlSend,, {4}, ahk_id %wowid5%
ControlSend,, {4}, ahk_id %wowid6%
ControlSend,, {4}, ahk_id %wowid7%
ControlSend,, {4}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {0}, ahk_id %wowid1%
ControlSend,, {0}, ahk_id %wowid2%
ControlSend,, {0}, ahk_id %wowid3%
ControlSend,, {0}, ahk_id %wowid4%
ControlSend,, {0}, ahk_id %wowid5%
ControlSend,, {0}, ahk_id %wowid6%
ControlSend,, {0}, ahk_id %wowid7%
ControlSend,, {0}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {f}, ahk_id %wowid1%
ControlSend,, {f}, ahk_id %wowid2%
ControlSend,, {f}, ahk_id %wowid3%
ControlSend,, {f}, ahk_id %wowid4%
ControlSend,, {f}, ahk_id %wowid5%
ControlSend,, {f}, ahk_id %wowid6%
ControlSend,, {f}, ahk_id %wowid7%
ControlSend,, {f}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {m}, ahk_id %wowid1%
ControlSend,, {m}, ahk_id %wowid2%
ControlSend,, {m}, ahk_id %wowid3%
ControlSend,, {m}, ahk_id %wowid4%
ControlSend,, {m}, ahk_id %wowid5%
ControlSend,, {m}, ahk_id %wowid6%
ControlSend,, {m}, ahk_id %wowid7%
ControlSend,, {m}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {1}, ahk_id %wowid1%
ControlSend,, {1}, ahk_id %wowid2%
ControlSend,, {1}, ahk_id %wowid3%
ControlSend,, {1}, ahk_id %wowid4%
ControlSend,, {1}, ahk_id %wowid5%
ControlSend,, {1}, ahk_id %wowid6%
ControlSend,, {1}, ahk_id %wowid7%
ControlSend,, {1}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {2}, ahk_id %wowid1%
ControlSend,, {2}, ahk_id %wowid2%
ControlSend,, {2}, ahk_id %wowid3%
ControlSend,, {2}, ahk_id %wowid4%
ControlSend,, {2}, ahk_id %wowid5%
ControlSend,, {2}, ahk_id %wowid6%
ControlSend,, {2}, ahk_id %wowid7%
ControlSend,, {2}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {3}, ahk_id %wowid1%
ControlSend,, {3}, ahk_id %wowid2%
ControlSend,, {3}, ahk_id %wowid3%
ControlSend,, {3}, ahk_id %wowid4%
ControlSend,, {3}, ahk_id %wowid5%
ControlSend,, {3}, ahk_id %wowid6%
ControlSend,, {3}, ahk_id %wowid7%
ControlSend,, {3}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {4}, ahk_id %wowid1%
ControlSend,, {4}, ahk_id %wowid2%
ControlSend,, {4}, ahk_id %wowid3%
ControlSend,, {4}, ahk_id %wowid4%
ControlSend,, {4}, ahk_id %wowid5%
ControlSend,, {4}, ahk_id %wowid6%
ControlSend,, {4}, ahk_id %wowid7%
ControlSend,, {4}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {0}, ahk_id %wowid1%
ControlSend,, {0}, ahk_id %wowid2%
ControlSend,, {0}, ahk_id %wowid3%
ControlSend,, {0}, ahk_id %wowid4%
ControlSend,, {0}, ahk_id %wowid5%
ControlSend,, {0}, ahk_id %wowid6%
ControlSend,, {0}, ahk_id %wowid7%
ControlSend,, {0}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {f}, ahk_id %wowid1%
ControlSend,, {f}, ahk_id %wowid2%
ControlSend,, {f}, ahk_id %wowid3%
ControlSend,, {f}, ahk_id %wowid4%
ControlSend,, {f}, ahk_id %wowid5%
ControlSend,, {f}, ahk_id %wowid6%
ControlSend,, {f}, ahk_id %wowid7%
ControlSend,, {f}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {m}, ahk_id %wowid1%
ControlSend,, {m}, ahk_id %wowid2%
ControlSend,, {m}, ahk_id %wowid3%
ControlSend,, {m}, ahk_id %wowid4%
ControlSend,, {m}, ahk_id %wowid5%
ControlSend,, {m}, ahk_id %wowid6%
ControlSend,, {m}, ahk_id %wowid7%
ControlSend,, {m}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {1}, ahk_id %wowid1%
ControlSend,, {1}, ahk_id %wowid2%
ControlSend,, {1}, ahk_id %wowid3%
ControlSend,, {1}, ahk_id %wowid4%
ControlSend,, {1}, ahk_id %wowid5%
ControlSend,, {1}, ahk_id %wowid6%
ControlSend,, {1}, ahk_id %wowid7%
ControlSend,, {1}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {2}, ahk_id %wowid1%
ControlSend,, {2}, ahk_id %wowid2%
ControlSend,, {2}, ahk_id %wowid3%
ControlSend,, {2}, ahk_id %wowid4%
ControlSend,, {2}, ahk_id %wowid5%
ControlSend,, {2}, ahk_id %wowid6%
ControlSend,, {2}, ahk_id %wowid7%
ControlSend,, {2}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {3}, ahk_id %wowid1%
ControlSend,, {3}, ahk_id %wowid2%
ControlSend,, {3}, ahk_id %wowid3%
ControlSend,, {3}, ahk_id %wowid4%
ControlSend,, {3}, ahk_id %wowid5%
ControlSend,, {3}, ahk_id %wowid6%
ControlSend,, {3}, ahk_id %wowid7%
ControlSend,, {3}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {4}, ahk_id %wowid1%
ControlSend,, {4}, ahk_id %wowid2%
ControlSend,, {4}, ahk_id %wowid3%
ControlSend,, {4}, ahk_id %wowid4%
ControlSend,, {4}, ahk_id %wowid5%
ControlSend,, {4}, ahk_id %wowid6%
ControlSend,, {4}, ahk_id %wowid7%
ControlSend,, {4}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {0}, ahk_id %wowid1%
ControlSend,, {0}, ahk_id %wowid2%
ControlSend,, {0}, ahk_id %wowid3%
ControlSend,, {0}, ahk_id %wowid4%
ControlSend,, {0}, ahk_id %wowid5%
ControlSend,, {0}, ahk_id %wowid6%
ControlSend,, {0}, ahk_id %wowid7%
ControlSend,, {0}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {f}, ahk_id %wowid1%
ControlSend,, {f}, ahk_id %wowid2%
ControlSend,, {f}, ahk_id %wowid3%
ControlSend,, {f}, ahk_id %wowid4%
ControlSend,, {f}, ahk_id %wowid5%
ControlSend,, {f}, ahk_id %wowid6%
ControlSend,, {f}, ahk_id %wowid7%
ControlSend,, {f}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {m}, ahk_id %wowid1%
ControlSend,, {m}, ahk_id %wowid2%
ControlSend,, {m}, ahk_id %wowid3%
ControlSend,, {m}, ahk_id %wowid4%
ControlSend,, {m}, ahk_id %wowid5%
ControlSend,, {m}, ahk_id %wowid6%
ControlSend,, {m}, ahk_id %wowid7%
ControlSend,, {m}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {1}, ahk_id %wowid1%
ControlSend,, {1}, ahk_id %wowid2%
ControlSend,, {1}, ahk_id %wowid3%
ControlSend,, {1}, ahk_id %wowid4%
ControlSend,, {1}, ahk_id %wowid5%
ControlSend,, {1}, ahk_id %wowid6%
ControlSend,, {1}, ahk_id %wowid7%
ControlSend,, {1}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {2}, ahk_id %wowid1%
ControlSend,, {2}, ahk_id %wowid2%
ControlSend,, {2}, ahk_id %wowid3%
ControlSend,, {2}, ahk_id %wowid4%
ControlSend,, {2}, ahk_id %wowid5%
ControlSend,, {2}, ahk_id %wowid6%
ControlSend,, {2}, ahk_id %wowid7%
ControlSend,, {2}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {3}, ahk_id %wowid1%
ControlSend,, {3}, ahk_id %wowid2%
ControlSend,, {3}, ahk_id %wowid3%
ControlSend,, {3}, ahk_id %wowid4%
ControlSend,, {3}, ahk_id %wowid5%
ControlSend,, {3}, ahk_id %wowid6%
ControlSend,, {3}, ahk_id %wowid7%
ControlSend,, {3}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {4}, ahk_id %wowid1%
ControlSend,, {4}, ahk_id %wowid2%
ControlSend,, {4}, ahk_id %wowid3%
ControlSend,, {4}, ahk_id %wowid4%
ControlSend,, {4}, ahk_id %wowid5%
ControlSend,, {4}, ahk_id %wowid6%
ControlSend,, {4}, ahk_id %wowid7%
ControlSend,, {4}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {0}, ahk_id %wowid1%
ControlSend,, {0}, ahk_id %wowid2%
ControlSend,, {0}, ahk_id %wowid3%
ControlSend,, {0}, ahk_id %wowid4%
ControlSend,, {0}, ahk_id %wowid5%
ControlSend,, {0}, ahk_id %wowid6%
ControlSend,, {0}, ahk_id %wowid7%
ControlSend,, {0}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {f}, ahk_id %wowid1%
ControlSend,, {f}, ahk_id %wowid2%
ControlSend,, {f}, ahk_id %wowid3%
ControlSend,, {f}, ahk_id %wowid4%
ControlSend,, {f}, ahk_id %wowid5%
ControlSend,, {f}, ahk_id %wowid6%
ControlSend,, {f}, ahk_id %wowid7%
ControlSend,, {f}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {m}, ahk_id %wowid1%
ControlSend,, {m}, ahk_id %wowid2%
ControlSend,, {m}, ahk_id %wowid3%
ControlSend,, {m}, ahk_id %wowid4%
ControlSend,, {m}, ahk_id %wowid5%
ControlSend,, {m}, ahk_id %wowid6%
ControlSend,, {m}, ahk_id %wowid7%
ControlSend,, {m}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {1}, ahk_id %wowid1%
ControlSend,, {1}, ahk_id %wowid2%
ControlSend,, {1}, ahk_id %wowid3%
ControlSend,, {1}, ahk_id %wowid4%
ControlSend,, {1}, ahk_id %wowid5%
ControlSend,, {1}, ahk_id %wowid6%
ControlSend,, {1}, ahk_id %wowid7%
ControlSend,, {1}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {2}, ahk_id %wowid1%
ControlSend,, {2}, ahk_id %wowid2%
ControlSend,, {2}, ahk_id %wowid3%
ControlSend,, {2}, ahk_id %wowid4%
ControlSend,, {2}, ahk_id %wowid5%
ControlSend,, {2}, ahk_id %wowid6%
ControlSend,, {2}, ahk_id %wowid7%
ControlSend,, {2}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {3}, ahk_id %wowid1%
ControlSend,, {3}, ahk_id %wowid2%
ControlSend,, {3}, ahk_id %wowid3%
ControlSend,, {3}, ahk_id %wowid4%
ControlSend,, {3}, ahk_id %wowid5%
ControlSend,, {3}, ahk_id %wowid6%
ControlSend,, {3}, ahk_id %wowid7%
ControlSend,, {3}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {4}, ahk_id %wowid1%
ControlSend,, {4}, ahk_id %wowid2%
ControlSend,, {4}, ahk_id %wowid3%
ControlSend,, {4}, ahk_id %wowid4%
ControlSend,, {4}, ahk_id %wowid5%
ControlSend,, {4}, ahk_id %wowid6%
ControlSend,, {4}, ahk_id %wowid7%
ControlSend,, {4}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {0}, ahk_id %wowid1%
ControlSend,, {0}, ahk_id %wowid2%
ControlSend,, {0}, ahk_id %wowid3%
ControlSend,, {0}, ahk_id %wowid4%
ControlSend,, {0}, ahk_id %wowid5%
ControlSend,, {0}, ahk_id %wowid6%
ControlSend,, {0}, ahk_id %wowid7%
ControlSend,, {0}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {f}, ahk_id %wowid1%
ControlSend,, {f}, ahk_id %wowid2%
ControlSend,, {f}, ahk_id %wowid3%
ControlSend,, {f}, ahk_id %wowid4%
ControlSend,, {f}, ahk_id %wowid5%
ControlSend,, {f}, ahk_id %wowid6%
ControlSend,, {f}, ahk_id %wowid7%
ControlSend,, {f}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {m}, ahk_id %wowid1%
ControlSend,, {m}, ahk_id %wowid2%
ControlSend,, {m}, ahk_id %wowid3%
ControlSend,, {m}, ahk_id %wowid4%
ControlSend,, {m}, ahk_id %wowid5%
ControlSend,, {m}, ahk_id %wowid6%
ControlSend,, {m}, ahk_id %wowid7%
ControlSend,, {m}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {1}, ahk_id %wowid1%
ControlSend,, {1}, ahk_id %wowid2%
ControlSend,, {1}, ahk_id %wowid3%
ControlSend,, {1}, ahk_id %wowid4%
ControlSend,, {1}, ahk_id %wowid5%
ControlSend,, {1}, ahk_id %wowid6%
ControlSend,, {1}, ahk_id %wowid7%
ControlSend,, {1}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {2}, ahk_id %wowid1%
ControlSend,, {2}, ahk_id %wowid2%
ControlSend,, {2}, ahk_id %wowid3%
ControlSend,, {2}, ahk_id %wowid4%
ControlSend,, {2}, ahk_id %wowid5%
ControlSend,, {2}, ahk_id %wowid6%
ControlSend,, {2}, ahk_id %wowid7%
ControlSend,, {2}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {3}, ahk_id %wowid1%
ControlSend,, {3}, ahk_id %wowid2%
ControlSend,, {3}, ahk_id %wowid3%
ControlSend,, {3}, ahk_id %wowid4%
ControlSend,, {3}, ahk_id %wowid5%
ControlSend,, {3}, ahk_id %wowid6%
ControlSend,, {3}, ahk_id %wowid7%
ControlSend,, {3}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {4}, ahk_id %wowid1%
ControlSend,, {4}, ahk_id %wowid2%
ControlSend,, {4}, ahk_id %wowid3%
ControlSend,, {4}, ahk_id %wowid4%
ControlSend,, {4}, ahk_id %wowid5%
ControlSend,, {4}, ahk_id %wowid6%
ControlSend,, {4}, ahk_id %wowid7%
ControlSend,, {4}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {0}, ahk_id %wowid1%
ControlSend,, {0}, ahk_id %wowid2%
ControlSend,, {0}, ahk_id %wowid3%
ControlSend,, {0}, ahk_id %wowid4%
ControlSend,, {0}, ahk_id %wowid5%
ControlSend,, {0}, ahk_id %wowid6%
ControlSend,, {0}, ahk_id %wowid7%
ControlSend,, {0}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {f}, ahk_id %wowid1%
ControlSend,, {f}, ahk_id %wowid2%
ControlSend,, {f}, ahk_id %wowid3%
ControlSend,, {f}, ahk_id %wowid4%
ControlSend,, {f}, ahk_id %wowid5%
ControlSend,, {f}, ahk_id %wowid6%
ControlSend,, {f}, ahk_id %wowid7%
ControlSend,, {f}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {m}, ahk_id %wowid1%
ControlSend,, {m}, ahk_id %wowid2%
ControlSend,, {m}, ahk_id %wowid3%
ControlSend,, {m}, ahk_id %wowid4%
ControlSend,, {m}, ahk_id %wowid5%
ControlSend,, {m}, ahk_id %wowid6%
ControlSend,, {m}, ahk_id %wowid7%
ControlSend,, {m}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {1}, ahk_id %wowid1%
ControlSend,, {1}, ahk_id %wowid2%
ControlSend,, {1}, ahk_id %wowid3%
ControlSend,, {1}, ahk_id %wowid4%
ControlSend,, {1}, ahk_id %wowid5%
ControlSend,, {1}, ahk_id %wowid6%
ControlSend,, {1}, ahk_id %wowid7%
ControlSend,, {1}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {2}, ahk_id %wowid1%
ControlSend,, {2}, ahk_id %wowid2%
ControlSend,, {2}, ahk_id %wowid3%
ControlSend,, {2}, ahk_id %wowid4%
ControlSend,, {2}, ahk_id %wowid5%
ControlSend,, {2}, ahk_id %wowid6%
ControlSend,, {2}, ahk_id %wowid7%
ControlSend,, {2}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {3}, ahk_id %wowid1%
ControlSend,, {3}, ahk_id %wowid2%
ControlSend,, {3}, ahk_id %wowid3%
ControlSend,, {3}, ahk_id %wowid4%
ControlSend,, {3}, ahk_id %wowid5%
ControlSend,, {3}, ahk_id %wowid6%
ControlSend,, {3}, ahk_id %wowid7%
ControlSend,, {3}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {4}, ahk_id %wowid1%
ControlSend,, {4}, ahk_id %wowid2%
ControlSend,, {4}, ahk_id %wowid3%
ControlSend,, {4}, ahk_id %wowid4%
ControlSend,, {4}, ahk_id %wowid5%
ControlSend,, {4}, ahk_id %wowid6%
ControlSend,, {4}, ahk_id %wowid7%
ControlSend,, {4}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {0}, ahk_id %wowid1%
ControlSend,, {0}, ahk_id %wowid2%
ControlSend,, {0}, ahk_id %wowid3%
ControlSend,, {0}, ahk_id %wowid4%
ControlSend,, {0}, ahk_id %wowid5%
ControlSend,, {0}, ahk_id %wowid6%
ControlSend,, {0}, ahk_id %wowid7%
ControlSend,, {0}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {f}, ahk_id %wowid1%
ControlSend,, {f}, ahk_id %wowid2%
ControlSend,, {f}, ahk_id %wowid3%
ControlSend,, {f}, ahk_id %wowid4%
ControlSend,, {f}, ahk_id %wowid5%
ControlSend,, {f}, ahk_id %wowid6%
ControlSend,, {f}, ahk_id %wowid7%
ControlSend,, {f}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {m}, ahk_id %wowid1%
ControlSend,, {m}, ahk_id %wowid2%
ControlSend,, {m}, ahk_id %wowid3%
ControlSend,, {m}, ahk_id %wowid4%
ControlSend,, {m}, ahk_id %wowid5%
ControlSend,, {m}, ahk_id %wowid6%
ControlSend,, {m}, ahk_id %wowid7%
ControlSend,, {m}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {1}, ahk_id %wowid1%
ControlSend,, {1}, ahk_id %wowid2%
ControlSend,, {1}, ahk_id %wowid3%
ControlSend,, {1}, ahk_id %wowid4%
ControlSend,, {1}, ahk_id %wowid5%
ControlSend,, {1}, ahk_id %wowid6%
ControlSend,, {1}, ahk_id %wowid7%
ControlSend,, {1}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {2}, ahk_id %wowid1%
ControlSend,, {2}, ahk_id %wowid2%
ControlSend,, {2}, ahk_id %wowid3%
ControlSend,, {2}, ahk_id %wowid4%
ControlSend,, {2}, ahk_id %wowid5%
ControlSend,, {2}, ahk_id %wowid6%
ControlSend,, {2}, ahk_id %wowid7%
ControlSend,, {2}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {3}, ahk_id %wowid1%
ControlSend,, {3}, ahk_id %wowid2%
ControlSend,, {3}, ahk_id %wowid3%
ControlSend,, {3}, ahk_id %wowid4%
ControlSend,, {3}, ahk_id %wowid5%
ControlSend,, {3}, ahk_id %wowid6%
ControlSend,, {3}, ahk_id %wowid7%
ControlSend,, {3}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {4}, ahk_id %wowid1%
ControlSend,, {4}, ahk_id %wowid2%
ControlSend,, {4}, ahk_id %wowid3%
ControlSend,, {4}, ahk_id %wowid4%
ControlSend,, {4}, ahk_id %wowid5%
ControlSend,, {4}, ahk_id %wowid6%
ControlSend,, {4}, ahk_id %wowid7%
ControlSend,, {4}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {0}, ahk_id %wowid1%
ControlSend,, {0}, ahk_id %wowid2%
ControlSend,, {0}, ahk_id %wowid3%
ControlSend,, {0}, ahk_id %wowid4%
ControlSend,, {0}, ahk_id %wowid5%
ControlSend,, {0}, ahk_id %wowid6%
ControlSend,, {0}, ahk_id %wowid7%
ControlSend,, {0}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {f}, ahk_id %wowid1%
ControlSend,, {f}, ahk_id %wowid2%
ControlSend,, {f}, ahk_id %wowid3%
ControlSend,, {f}, ahk_id %wowid4%
ControlSend,, {f}, ahk_id %wowid5%
ControlSend,, {f}, ahk_id %wowid6%
ControlSend,, {f}, ahk_id %wowid7%
ControlSend,, {f}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {m}, ahk_id %wowid1%
ControlSend,, {m}, ahk_id %wowid2%
ControlSend,, {m}, ahk_id %wowid3%
ControlSend,, {m}, ahk_id %wowid4%
ControlSend,, {m}, ahk_id %wowid5%
ControlSend,, {m}, ahk_id %wowid6%
ControlSend,, {m}, ahk_id %wowid7%
ControlSend,, {m}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {1}, ahk_id %wowid1%
ControlSend,, {1}, ahk_id %wowid2%
ControlSend,, {1}, ahk_id %wowid3%
ControlSend,, {1}, ahk_id %wowid4%
ControlSend,, {1}, ahk_id %wowid5%
ControlSend,, {1}, ahk_id %wowid6%
ControlSend,, {1}, ahk_id %wowid7%
ControlSend,, {1}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {2}, ahk_id %wowid1%
ControlSend,, {2}, ahk_id %wowid2%
ControlSend,, {2}, ahk_id %wowid3%
ControlSend,, {2}, ahk_id %wowid4%
ControlSend,, {2}, ahk_id %wowid5%
ControlSend,, {2}, ahk_id %wowid6%
ControlSend,, {2}, ahk_id %wowid7%
ControlSend,, {2}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {3}, ahk_id %wowid1%
ControlSend,, {3}, ahk_id %wowid2%
ControlSend,, {3}, ahk_id %wowid3%
ControlSend,, {3}, ahk_id %wowid4%
ControlSend,, {3}, ahk_id %wowid5%
ControlSend,, {3}, ahk_id %wowid6%
ControlSend,, {3}, ahk_id %wowid7%
ControlSend,, {3}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {4}, ahk_id %wowid1%
ControlSend,, {4}, ahk_id %wowid2%
ControlSend,, {4}, ahk_id %wowid3%
ControlSend,, {4}, ahk_id %wowid4%
ControlSend,, {4}, ahk_id %wowid5%
ControlSend,, {4}, ahk_id %wowid6%
ControlSend,, {4}, ahk_id %wowid7%
ControlSend,, {4}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {0}, ahk_id %wowid1%
ControlSend,, {0}, ahk_id %wowid2%
ControlSend,, {0}, ahk_id %wowid3%
ControlSend,, {0}, ahk_id %wowid4%
ControlSend,, {0}, ahk_id %wowid5%
ControlSend,, {0}, ahk_id %wowid6%
ControlSend,, {0}, ahk_id %wowid7%
ControlSend,, {0}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {f}, ahk_id %wowid1%
ControlSend,, {f}, ahk_id %wowid2%
ControlSend,, {f}, ahk_id %wowid3%
ControlSend,, {f}, ahk_id %wowid4%
ControlSend,, {f}, ahk_id %wowid5%
ControlSend,, {f}, ahk_id %wowid6%
ControlSend,, {f}, ahk_id %wowid7%
ControlSend,, {f}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {m}, ahk_id %wowid1%
ControlSend,, {m}, ahk_id %wowid2%
ControlSend,, {m}, ahk_id %wowid3%
ControlSend,, {m}, ahk_id %wowid4%
ControlSend,, {m}, ahk_id %wowid5%
ControlSend,, {m}, ahk_id %wowid6%
ControlSend,, {m}, ahk_id %wowid7%
ControlSend,, {m}, ahk_id %wowid8%
RandSleep(250,300),
}
Goto, F10
RandSleep(x,y) {
Random, rand, %x%, %y%
Sleep %rand%
}

F11::
{
ControlSend,, {0}, ahk_id %wowid1%
ControlSend,, {0}, ahk_id %wowid2%
ControlSend,, {0}, ahk_id %wowid3%
ControlSend,, {0}, ahk_id %wowid4%
ControlSend,, {0}, ahk_id %wowid5%
ControlSend,, {0}, ahk_id %wowid6%
ControlSend,, {0}, ahk_id %wowid7%
ControlSend,, {0}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {f}, ahk_id %wowid1%
ControlSend,, {f}, ahk_id %wowid2%
ControlSend,, {f}, ahk_id %wowid3%
ControlSend,, {f}, ahk_id %wowid4%
ControlSend,, {f}, ahk_id %wowid5%
ControlSend,, {f}, ahk_id %wowid6%
ControlSend,, {f}, ahk_id %wowid7%
ControlSend,, {f}, ahk_id %wowid8%
RandSleep(250,500),
ControlSend,, {m}, ahk_id %wowid1%
ControlSend,, {m}, ahk_id %wowid2%
ControlSend,, {m}, ahk_id %wowid3%
ControlSend,, {m}, ahk_id %wowid4%
ControlSend,, {m}, ahk_id %wowid5%
ControlSend,, {m}, ahk_id %wowid6%
ControlSend,, {m}, ahk_id %wowid7%
ControlSend,, {m}, ahk_id %wowid8%
RandSleep(250,500),
}
Goto, F11

F9::Pause

F12::Reload


