import React from "react";

const About = () => {
  const teamMembers = [
    {
      role: "เขียนโปรแกรม",
      name: "โสภณ จำปาซ่อนกลิ่น",
    },
    {
      role: "ออกแบบ",
      name: "นัฐพล ไก่แก้ว",
    },
    {
      role: "วิเคราะห์ข้อมูล",
      name: "ปฏิภาณ ศรีชัย",
    },
    {
      role: "สืบค้นและเรียบเรียงข้อมูล",
      name: "อาลาวีย์ วาแม",
    },
    {
      role: "บรรณาธิการ",
      name: "ธนิสรา เรืองเดช",
    },
  ];
  return (
    <div className=" text-[#2322BC] px-5 pb-10 flex max-w-[800px] mx-auto text-start flex-col">
      <p className=" h4 font-black text-center mt-10">เกี่ยวกับโครงการ</p>
      <div className=" mt-20  text-start">
        <p className="h5 font-black">เป้าหมาย</p>
        <p className=" b3 mt-8">
          หนึ่งในกลไกสำคัญที่ผลักดันกระบวนการนิติบัญญัติภายในรัฐสภาคือคณะกรรมาธิการประจำรัฐสภา
          ที่เปรียบเสมือนห้องประชุมสภาขนาดเล็ก
          ทำหน้าที่พิจารณาศึกษาปัญหาและหาข้อเท็จตามที่สภากำหนด
          ในฐานะประชาชนที่เลือกผู้แทนเข้าทำงานในรัฐสภา g
          จึงเป็นเรื่องสำคัญที่จะต้อง ‘เข้าใจ’ ว่าคณะกรรมาธิการ (กมธ.) คืออะไร
          มีบทบาทอย่างไร รวมถึง ‘ติดตาม’ กระบวนการทำงานของ กมธ. ว่าเป็นอย่างไร
        </p>
        <p className="b3 mt-8">
          WeVis ในฐานะกลุ่มเทคโนโลยีภาคประชาชน
          ที่สนับสนุนการเปิดเผยข้อมูลเพื่อให้ประชาชนตรวจสอบและมีส่วนร่วมทางการเมืองมากขึ้น
          จึงจัดทำเว็บไซต์ชิ้นนี้เพื่อตอบคำถามสำคัญว่าในช่วง 2 ปีที่ผ่านมา กมธ.
          ทำงานเพื่อผลักดันประเด็นอะไรบ้าง กมธ.
          มีการเปิดเผยข้อมูลอะไรและในลักษณะไหน
          และนักวิชาการมีความเห็นต่อโครงสร้างและอำนาจของ กมธ. ในปัจจุบันอย่างไร
        </p>
        <p className="b3 mt-8">
          การเปิดเผยข้อมูลและการเพิ่มการมีส่วนร่วมของประชาชนจะทำให้ กมธ.
          ทำงานอยู่ภายใต้การตรวจสอบจากสาธารณะ ซึ่งจะเป็นแรงจูงใจให้ กมธ.
          ปฏิบัติหน้าที่ด้วยความรอบคอบ โปร่งใส และมีความรับผิด
          กระบวนการนี้ไม่เพียงแต่ส่งเสริมความโปร่งใสและความน่าเชื่อถือของกระบวนการนิติบัญญัติ
          แต่ยังเป็นการรักษาสิทธิของประชาชนในการรับรู้และมีส่วนร่วมในกระบวนการทางการเมืองเช่นกัน
        </p>
      </div>
      <div className=" mt-20  text-start">
        <p className="h5 font-black">ที่มาของข้อมูล</p>
        <ul className="list-disc  list-inside b3 text-start mt-5 ">
          <li className="py-3">
            รายชื่อคณะกรรมธิการสามัญจาก
            <a
              href="https://www.senate.go.th/assets/portals/93/fileups/253/files/force/hr/force-hr2551.pdf"
              target="_blank"
              className="underline inline cursor-pointer"
            >
              ข้อบังคับการประชุมสภาผู้แทนราษฎร พ.ศ. 2551
            </a>{" "}
            และ{" "}
            <a
              href="https://www.senate.go.th/assets/portals/93/fileups/257/files/kbk/kbk%20update%2064.pdf"
              target="_blank"
              className="underline inline cursor-pointer"
            >
              ข้อบังคับการประชุมวุฒิสภา พ.ศ. 2562 และฉบับแก้ไขเพิ่มเติม
            </a>
          </li>
          <li className="py-3">
            เอกสารบันทึกการประชุมของคณะกรรมาธิการสามัญสภาผู้แทนราษฎร จากเว็บไซต์{" "}
            <a
              href="https://www.parliament.go.th/view/1/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%B2%E0%B8%98%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3/TH-TH"
              target="_blank"
              className="underline inline cursor-pointer"
            >
              สภาผู้แทนราษฎร
            </a>{" "}
            โดยเก็บข้อมูลระหว่างเดือนกรกฎาคม 2566 ถึงพฤษภาคม 2568
          </li>
          <li className="py-3">
            เอกสารบันทึกการประชุมของคณะกรรมาธิการสามัญวุฒิสภา จากเว็บไซต์{" "}
            <a
              href="https://www.senate.go.th/view/1/%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%B2%E0%B8%98%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3/TH-TH"
              target="_blank"
              className="underline inline cursor-pointer"
            >
              วุฒิสภา
            </a>
            โดยเก็บข้อมูลระหว่างเดือนกรกฎาคม 2566 ถึงพฤษภาคม 2568
          </li>
          <li className="py-3">
            <a
              href="https://web.parliament.go.th/assets/portals/1/files/001_%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%B2%E0%B8%98%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3.pdf"
              target="_blank"
              className="underline inline cursor-pointer"
            >
              ข้อมูลคณะกรรมาธิการ
            </a>{" "}
            โดยกลุ่มงานสารนิเทศ สำนักประชาสัมพันธ์
            สำนักงานเลขาธิการสภาผู้แทนราษฎร
          </li>
          <li className="py-3">
            <a
              href="https://wiki.kpi.ac.th/index.php?title=%E0%B8%9D%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B8%B4%E0%B8%95%E0%B8%B4%E0%B8%9A%E0%B8%B1%E0%B8%8D%E0%B8%8D%E0%B8%B1%E0%B8%95%E0%B8%B4"
              target="_blank"
              className="underline inline cursor-pointer"
            >
              บทความเรื่องฝ่ายนิติบัญญัติ
            </a>{" "}
            โดยสถาบันพระปกเกล้า
          </li>
          <li className="py-3">รัฐธรรมนูญ 2560</li>
          <li className="py-3">
            ข้อมูลคณะกรรมาธิการรัฐสภาสหราชอาณาจักร จากเว็บไซต์{" "}
            <a
              href="https://www.figma.com/exit?url=https%3A%2F%2Fwww.parliament.uk%2F"
              target="_blank"
              className="underline inline cursor-pointer"
            >
              UK Parliament
            </a>
          </li>
          <li className="py-3">
            ข้อมูลคณะกรรมาธิการรัฐสภาออสเตรเลีย จากเว็บไซต์{" "}
            <a
              href="https://www.aph.gov.au/"
              target="_blank"
              className="underline inline cursor-pointer"
            >
              Parliament of Australia
            </a>
          </li>
          <li className="py-3">
            บทสัมภาษณ์ความเห็นเรื่องการเปิดเผยข้อมูลของคณะกรรมาธิการ โดย
            รศ.ดร.วรรณภา ติระสังขะ และเทวฤทธิ์ มณีฉาย
          </li>
          <li className="py-3">
            <a
              href="https://so06.tci-thaijo.org/index.php/kpi_journal/article/view/276276/187502"
              target="_blank"
              className="underline inline cursor-pointer"
            >
              {" "}
              งานศึกษาเรื่องปัญหาการทําหน้าที่ของคณะกรรมาธิการในการแสวงห้าข้อเท็จจริงฯ:
              <br />
              ศึกษาเปรียบเทียบการทําหน้าที่ของคณะกรรมาธิการในประเทศสหรัฐอเมริกา
            </a>
            โดย ผศ.ดร.พรสันต์ เลี้ยงบุญเลิศชัย
          </li>
        </ul>
      </div>
      <div className=" mt-20  text-start">
        <p className="h5 font-black">นโยบายการนำข้อมูลไปใช้ต่อ</p>
        <p className="b3 mt-5">
          ทางทีมมีความตั้งใจที่พัฒนาทุกโปรเจกต์ให้เป็น Open Source
          และเปิดข้อมูลเป็น Open Data{" "}
          <a
            href="https://wevis.info/terms-of-use/"
            target="_blank"
            className="underline inline cursor-pointer"
          >
            ภายใต้ข้อตกลงในการใช้งาน (Terms of Use)
          </a>
           หากมีข้อสงสัยต้องการสอบถามเพิ่มเติมประสงค์แจ้งเปลี่ยนแปลงหรือเพิ่มเติมข้อมูลเพื่อความถูกต้อง
          หรือมีข้อเสนอแนะใด ๆ สามารถติดต่อได้ที่ team@wevis.info
        </p>
      </div>
      <div className=" mt-20  text-start">
        <p className="h5 font-black">ทีมงานร่วมพัฒนา</p>
        <div className="b3 mt-5 flex flex-col space-y-5">
          {teamMembers.map((member, index) => (
            <div key={index}>
              <p className="font-bold">{member.role}</p>
              <p className="">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" mt-20  text-start">
        <p className="h5 font-black">หมายเหตุ</p>
        <p className="b3 mt-5">
          WeVis ได้รับการสนับสนุนทุนในการดำเนินงานจาก 
          <a
            href="https://www.ned.org/"
            target="_blank"
            className="underline inline cursor-pointer"
          >
            National Endowment for Democracy (NED)
          </a>
           และ 
          <a
            href="https://www.opensocietyfoundations.org/"
            target="_blank"
            className="underline inline cursor-pointer"
          >
            Open Society Foundation (OSF)
          </a>
           ซึ่งนำมาใช้เป็นต้นทุนในการรวมรวมข้อมูล ออกแบบ พัฒนาเว็บไซต์ ประสานงาน
          บริหารจัดการ ตลอดจนการจัดประชุมเพื่อดำเนินโครงการ
        </p>
      </div>
    </div>
  );
};

export default About;
