package com.scheduling.controller;


import com.scheduling.entity.yhzdygz;
import com.scheduling.entity.zhiwei;
import com.scheduling.service.AccountService_3;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;


@Controller
public class AccountController_3 {
    @Autowired
    private AccountService_3 accountService_3;

    @RequestMapping("changezdypb_3")
    public String changezdypb(HttpServletRequest request,Model model){
        String sid=request.getParameter("sid");
        System.out.println(sid);
        System.out.println(accountService_3.getzhiwei(sid).get(0).getPosition());
        System.out.println(accountService_3.getzhiwei(sid).get(1).getPosition());
        System.out.println(accountService_3.getzhiwei(sid).size());
        List<zhiwei> zhiweis=accountService_3.getzhiwei(sid);
        model.addAttribute("zhiwei",zhiweis);
        model.addAttribute("size",accountService_3.getzhiwei(sid).size());
        model.addAttribute("sid",sid);
        model.addAttribute("xiugia",0);
        model.addAttribute("dian",accountService_3.getdian(sid));
        HttpSession session=request.getSession();
        session.setAttribute("xiugai",0);
        return "zdypb";
    }


    @RequestMapping("change_3")
    @ResponseBody
    public String  change(HttpServletRequest request, Model model, yhzdygz yhzdygz){
        HttpSession session=request.getSession();
        int flag= (int) session.getAttribute("xiugai");
        if (flag==1){

        }else {
            accountService_3.changekdgz(yhzdygz);
        }
        return yhzdygz.toString();
    }



    @RequestMapping("xiugaipbgz_3")
    public String xiugaipbgz(HttpServletRequest request,Model model){
        String sid=request.getParameter("sid");
        System.out.println(sid);
        System.out.println(accountService_3.getzhiwei(sid).get(0).getPosition());
        System.out.println(accountService_3.getzhiwei(sid).get(1).getPosition());
        System.out.println(accountService_3.getzhiwei(sid).size());
        List<zhiwei> zhiweis=accountService_3.getzhiwei(sid);
        model.addAttribute("zhiwei",zhiweis);
        model.addAttribute("size",accountService_3.getzhiwei(sid).size());
        model.addAttribute("sid",sid);
        model.addAttribute("dian",accountService_3.getdian(sid));
        yhzdygz yhzdygz;
        yhzdygz=accountService_3.getyhzdygz(sid);
        model.addAttribute("guize",yhzdygz);
        model.addAttribute("xiugia",1);
        HttpSession session=request.getSession();
        session.setAttribute("xiugai",0);





        return "zdypb";
    }

}
