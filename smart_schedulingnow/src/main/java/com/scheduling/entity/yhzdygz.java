package com.scheduling.entity;

public class yhzdygz {//用户自定义规则类
    private String sid;//门店id
    private String name;//门店名字
    private String sname;//门店所有人
    private String kdqzbsj;//开店前准备时间
    private String kdqbz;//开店前面积人数比值
    private String kdqxdzw;//开店前限定职位
    private String kdqjklbz;//开店期间客流人数比值
    private String kdqjxdzw;//开店期间限定职位
    private String zdzbrs;//最低值班人数
    private String gdsj;//关店时间
    private String gdmjrsb;//关店面积人数比
    private String gdewfzrs;//关店额外人数
    private String gdxdzw;//关店限定职务

    @Override
    public String toString() {
        return "yhzdygz{" +
                "sid='" + sid + '\'' +
                ", name='" + name + '\'' +
                ", sname='" + sname + '\'' +
                ", kdqzbsj='" + kdqzbsj + '\'' +
                ", kdqbz='" + kdqbz + '\'' +
                ", kdqxdzw='" + kdqxdzw + '\'' +
                ", kdqjklbz='" + kdqjklbz + '\'' +
                ", kdqjxdzw='" + kdqjxdzw + '\'' +
                ", zdzbrs='" + zdzbrs + '\'' +
                ", gdsj='" + gdsj + '\'' +
                ", gdmjrsb='" + gdmjrsb + '\'' +
                ", gdewfzrs='" + gdewfzrs + '\'' +
                ", gdxdzw='" + gdxdzw + '\'' +
                '}';
    }

    public String getSid() {
        return sid;
    }

    public void setSid(String sid) {
        this.sid = sid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSname() {
        return sname;
    }

    public void setSname(String sname) {
        this.sname = sname;
    }

    public String getKdqzbsj() {
        return kdqzbsj;
    }

    public void setKdqzbsj(String kdqzbsj) {
        this.kdqzbsj = kdqzbsj;
    }

    public String getKdqbz() {
        return kdqbz;
    }

    public void setKdqbz(String kdqbz) {
        this.kdqbz = kdqbz;
    }

    public String getKdqxdzw() {
        return kdqxdzw;
    }

    public void setKdqxdzw(String kdqxdzw) {
        this.kdqxdzw = kdqxdzw;
    }

    public String getKdqjklbz() {
        return kdqjklbz;
    }

    public void setKdqjklbz(String kdqjklbz) {
        this.kdqjklbz = kdqjklbz;
    }

    public String getKdqjxdzw() {
        return kdqjxdzw;
    }

    public void setKdqjxdzw(String kdqjxdzw) {
        this.kdqjxdzw = kdqjxdzw;
    }

    public String getZdzbrs() {
        return zdzbrs;
    }

    public void setZdzbrs(String zdzbrs) {
        this.zdzbrs = zdzbrs;
    }

    public String getGdsj() {
        return gdsj;
    }

    public void setGdsj(String gdsj) {
        this.gdsj = gdsj;
    }

    public String getGdmjrsb() {
        return gdmjrsb;
    }

    public void setGdmjrsb(String gdmjrsb) {
        this.gdmjrsb = gdmjrsb;
    }

    public String getGdewfzrs() {
        return gdewfzrs;
    }

    public void setGdewfzrs(String gdewfzrs) {
        this.gdewfzrs = gdewfzrs;
    }

    public String getGdxdzw() {
        return gdxdzw;
    }

    public void setGdxdzw(String gdxdzw) {
        this.gdxdzw = gdxdzw;
    }
}
