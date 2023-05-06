package com.scheduling.entity;

public class employeepreferences {
    private String pre_type;
    private String staff;
    private String pre_value;
    private int flag;
    private String id;
    private String name;

    @Override
    public String toString() {
        return "Preference{" +
                "pre_type='" + pre_type + '\'' +
                ", staff='" + staff + '\'' +
                ", pre_value='" + pre_value + '\'' +
                ", flag=" + flag +
                ", id='" + id + '\'' +
                ", name='" + name + '\'' +
                '}';
    }

    public String getPre_type() {
        return pre_type;
    }

    public void setPre_type(String pre_type) {
        this.pre_type = pre_type;
    }

    public String getPre_value() {
        return pre_value;
    }

    public void setPre_value(String pre_value) {
        this.pre_value = pre_value;
    }

    public int getFlag() {
        return flag;
    }

    public void setFlag(int flag) {
        this.flag = flag;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStaff() {
        return staff;
    }

    public void setStaff(String staff) {
        this.staff = staff;
    }
}
